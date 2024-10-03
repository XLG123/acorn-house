// Return true if screen size <= 900px, else false.
const isScreenSizeLessThan900px = () => window.innerWidth <= 900;

// Return true if display style of navigation option is grid, else false.
const isGrid = (navOption) => {
    return (
        window.getComputedStyle(navOption).getPropertyValue("display") ===
        "grid"
    );
};

// Return true if sidebar is shown as block, else false.
const isShown = (sidebar) => {
    return (
        window.getComputedStyle(sidebar).getPropertyValue("display") === "block"
    );
};

// Return true if click is within padding area, else false.
const isPaddingClick = (ctnWidth, paddingLeft, paddingRight, xCoord) => {
    return xCoord < paddingLeft || xCoord > ctnWidth - paddingRight;
};

// Return true if container is fully visible, else false.
const isFullyVisible = (container) => {
    const viewportHeight = window.innerHeight;
    const pos = container.getBoundingClientRect();
    return !(pos.top < 0 || pos.bottom > viewportHeight)
};

// Apply blur effect to non-sidebar sections.
const applyBlurEffect = () => {
    [
        document.getElementById("school-name-container"),
        document.getElementById("content-container"),
        document.getElementById("footer-ctn"),
    ].forEach((section) => section.classList.add("blurred"));
};

// Remove blur effect from non-sidebar sections.
const removeBlurEffect = () => {
    document
        .querySelectorAll(".blurred")
        .forEach((el) => el.classList.remove("blurred"));
};

// Get padding value for specified direction of an element.
const getPadding = (el, direction) => {
    const paddingDirection = "padding-" + direction;
    return parseFloat(
        window.getComputedStyle(el).getPropertyValue(paddingDirection)
    );
};

// Handle padding clicks to hide sidebar if clicked outside.
const handlePaddingClicks = (e) => {
    const navBarCtn = document.getElementById("nav-bar-container");
    const ctnWidth = navBarCtn.offsetWidth;
    const paddingLeft = getPadding(navBarCtn, "left");
    const paddingRight = getPadding(navBarCtn, "right");
    const xCoord = parseFloat(e.offsetX);

    if (
        e.target.classList[1] !== "fa-bars" &&
        isPaddingClick(ctnWidth, paddingLeft, paddingRight, xCoord)
    ) {
        const sidebar = document.getElementById("nav-links-container");
        sidebar.style.display = "none";
        removeBlurEffect();
    }
};

// Toggle padding click listener based on sidebar visibility.
const togglePaddingClicksListener = (sidebarIsShown) => {
    const navBarCtn = document.getElementById("nav-bar-container");
    if (sidebarIsShown) {
        navBarCtn.addEventListener("click", handlePaddingClicks);
    } else {
        navBarCtn.removeEventListener("click", handlePaddingClicks);
    }
};

// Toggle sidebar visibility and apply/remove blur effect.
const toggleSidebar = (display) => {
    const sidebar = document.getElementById("nav-links-container");
    if (display) {
        sidebar.style.display = "block";
        applyBlurEffect();
    } else {
        sidebar.style.display = "none";
        removeBlurEffect();
    }
    togglePaddingClicksListener(display);
};

// Reload page on school name click if screen size > 900px or sidebar hidden.
const triggerReload = () => {
    const schoolName = document.getElementById("school-name-container");
    schoolName.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar");
        if (!isScreenSizeLessThan900px() || !isShown(sidebar)) {
            document.location.reload();
        } else {
            toggleSidebar(false);
        }
    });
};

// Remove slash from navigation link.
const removeSlash = (navLinks) => {
    for (let i = 0; i < navLinks.length; ++i) {
        let link = navLinks[i].children[0].textContent;
        if (link.endsWith("/")) {
            link = link.substring(0, link.length - 1);
            navLinks[i].children[0].textContent = link;
        }
    }
};

// Add slash to navigation links.
const addSlash = (navLinks) => {
    for (let i = 0; i < navLinks.length; ++i) {
        let link = navLinks[i].children[0].textContent;
        if (!link.endsWith("/")) {
            navLinks[i].children[0].textContent = link + "/";
        }
    }
};

// Update navigation link name based on screen size.
const updateNavigationItem = (navLinks) => {
    if (
        window.innerWidth <= 1350 ||
        (window.innerWidth > 1500 && window.innerWidth <= 1600)
    ) {
        if (isGrid(navLinks[0])) {
            removeSlash(navLinks);
        }
    } else {
        addSlash(navLinks);
    }
};

// Insert sidebar toggle button at beginning of navigation bar.
const insertSidebarButton = () => {
    const navBarCtn = document.getElementById("nav-bar-container");
    const sidebarBtn = document.createElement("div");
    const sidebarIcon = document.createElement("i");

    sidebarIcon.classList.add("fa-solid", "fa-bars");
    sidebarIcon.addEventListener("click", () => {
        toggleSidebar(true);
    });

    sidebarBtn.setAttribute("id", "sidebar-btn");
    sidebarBtn.appendChild(sidebarIcon);
    navBarCtn.insertBefore(sidebarBtn, navBarCtn.firstChild);
};

// Insert close sidebar button on upper right corner of sidebar.
const insertCloseButton = () => {
    const navLinksCtn = document.getElementById("nav-links-container");
    const closeBtn = document.createElement("div");
    const closeIcon = document.createElement("i");

    closeIcon.classList.add("fa-solid", "fa-xmark");
    closeIcon.addEventListener("click", () => {
        toggleSidebar(false);
    });

    closeBtn.setAttribute("id", "close-sidebar-btn");
    closeBtn.appendChild(closeIcon);
    navLinksCtn.insertBefore(closeBtn, navLinksCtn.firstChild);
};

// Hide sidebar when clicked outside.
const handleClicksHelper = () => toggleSidebar(false);

// Handle clicks outside sidebar when sidebar is created.
const handleClicksOutsideSidebar = () => {
    const mainContentCtn = document.getElementById("content-container");
    const sidebarIsCreated = !!document.querySelector(".sidebar");
    if (sidebarIsCreated) {
        mainContentCtn.addEventListener("click", handleClicksHelper);
    } else {
        mainContentCtn.removeEventListener("click", handleClicksHelper);
    }
};

// Toggles buttons visibility and sidebar state based on device type.
const navBarMobileView = () => {
    const sidebarBtn = document.getElementById("sidebar-btn");
    const closeBtn = document.getElementById("close-sidebar-btn");
    const navigationLinks = document.getElementById("nav-links-container");
    if (isScreenSizeLessThan900px()) {
        if (!sidebarBtn) {
            insertSidebarButton();
        }
        if (!closeBtn) {
            insertCloseButton();
        }
        navigationLinks.style.display = "none";
        navigationLinks.classList.add("sidebar");
    } else {
        sidebarBtn?.remove();
        closeBtn?.remove();
        navigationLinks.style.display = "flex";
        navigationLinks.classList.remove("sidebar");
    }
    handleClicksOutsideSidebar();
};

// Update navigation bar and adjust for mobile view on resize.
const updateNavigationBar = () => {
    const navLinks = document.getElementsByClassName("nav-option");
    updateNavigationItem(navLinks);
    navBarMobileView();
    window.addEventListener("resize", () => {
        updateNavigationItem(navLinks);
        navBarMobileView();
        removeBlurEffect();
    });
};

// Scroll to selected section on the page.
const handleScrolling = (selectedSection) => {
    const sections = {
        aboutUs: document.getElementById("about-us-container"),
        programs: document.getElementById("programs-container"),
        contactInfo: document.getElementById("contact-info-container"),
    };

    sections[selectedSection].scrollIntoView();
};

// Toggle "selected" class on nav options based on selection.
const handleSelectedStyles = (selectedOption) => {
    const navOptions = {
        aboutUsOption: document.getElementById("selected-about-us"),
        programsOption: document.getElementById("selected-programs"),
        contactInfoOption: document.getElementById("selected-contact-info"),
    };

    for (const [optionName, option] of Object.entries(navOptions)) {
        option.classList.toggle("selected", optionName === selectedOption);
    }
};

// Apply "selected" class to nav links based on scroll position.
const applySelectedStyle = () => {
    const sections = {
        aboutUsSection: document.getElementById("about-us-container"),
        programsSection: document.getElementById("programs-container"),
        contactInfoSection: document.getElementById("contact-info-container"),
    };

    document.addEventListener("scroll", () => {
        let selectedOption = "";

        for (const [sectionName, section] of Object.entries(sections)) {
            if (isFullyVisible(section)) {
                selectedOption =
                    sectionName.substring(0, sectionName.length - 7) + "Option";
                break;
            }
        }

        handleSelectedStyles(selectedOption);
    });
};

// Handle nav link clicks, scroll to sections, and update selected style.
const scrollToPart = () => {
    const navOptionsCtn = document.getElementById("nav-links");

    navOptionsCtn.addEventListener("click", (e) => {
        const target = e.target.classList;
        let selectedSection = "";
        if (target.contains("about-us-option")) {
            selectedSection = "aboutUs";
        } else if (target.contains("programs-option")) {
            selectedSection = "programs";
        } else {
            selectedSection = "contactInfo";
        }

        if (isScreenSizeLessThan900px()) {
            toggleSidebar(false);
        }

        handleScrolling(selectedSection);
    });

    applySelectedStyle();
};

export { triggerReload, updateNavigationBar, scrollToPart };
