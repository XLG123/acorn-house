// Return true if screen size is less than or equal to 900px, otherwise return false.
const isScreenSizeLessThan900px = () => window.innerWidth <= 900;

// Return true if the display style of the navigation option is grid, otherwise return false.
const isGrid = (navOption) => {
    return (
        window.getComputedStyle(navOption).getPropertyValue("display") ===
        "grid"
    );
};

// Return true if the sidebar is shown as a block, otherwise return false.
const isShown = (sidebar) => {
    return (
        window.getComputedStyle(sidebar).getPropertyValue("display") === "block"
    );
};

// Return true if the click is within the pading area of the container, otherwise return false.
const isPaddingClick = (ctnWidth, paddingLeft, paddingRight, xCoord) => {
    return xCoord < paddingLeft || xCoord > ctnWidth - paddingRight;
};

// Return true if the container is fully visible, otheriwse return false.
const isFullyVisible = (container) => {
    const viewportHeight = window.innerHeight;
    const pos = container.getBoundingClientRect();
    if (pos.top < 0 || pos.bottom > viewportHeight) {
        return false;
    } else {
        return true;
    }
};

// Apply blur effect to the non-sidebar sections.
const applyBlurEffect = () => {
    [
        document.getElementById("school-name-container"),
        document.getElementById("content-container"),
        document.getElementById("footer-ctn"),
    ].forEach((section) => section.classList.add("blurred"));
};

// Remove blur effect from the non-sidebar sections.
const removeBlurEffect = () => {
    document
        .querySelectorAll(".blurred")
        .forEach((el) => el.classList.remove("blurred"));
};

// Gets padding value for specified direction of an element.
const getPadding = (el, direction) => {
    const paddingDirection = "padding-" + direction;
    return parseFloat(
        window.getComputedStyle(el).getPropertyValue(paddingDirection)
    );
};

// Handles padding clicks to hide sidebar if clicked outside sidebar.
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

// Toggles padding click listener based on sidebar visibility.
const togglePaddingClicksListener = (sidebarIsShown) => {
    const navBarCtn = document.getElementById("nav-bar-container");
    if (sidebarIsShown) {
        navBarCtn.addEventListener("click", handlePaddingClicks);
    } else {
        navBarCtn.removeEventListener("click", handlePaddingClicks);
    }
};

// Toggles sidebar visibility and applies/removes blur effect based on sidebar state.
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

// Reloads page on school name click unless on mobile with sidebar shown; then hides sidebar.
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

// Remove the slash from the navigation link.
const removeSlash = (navLinks) => {
    for (let i = 0; i < navLinks.length; ++i) {
        let link = navLinks[i].children[0].textContent;
        if (link.endsWith("/")) {
            link = link.substring(0, link.length - 1);
            navLinks[i].children[0].textContent = link;
        }
    }
};

// Add slash to each of the navigation links.
const addSlash = (navLinks) => {
    for (let i = 0; i < navLinks.length; ++i) {
        let link = navLinks[i].children[0].textContent;
        if (!link.endsWith("/")) {
            navLinks[i].children[0].textContent = link + "/";
        }
    }
};

// Update the name of the navigation links depends on the screen sizes.
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

// Insert a sidebar toggle button at the beginning of the navigation bar.
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

// Insert a close sidebar button on the upper right corner of the sidebar.
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

// Hides the sidebar when clicked outside.
const handleClicksHelper = () => toggleSidebar(false);

// Handle clicks outside the sidebar when sidebar is created.
const handleClicksOutsideSidebar = () => {
    const mainContentCtn = document.getElementById("content-container");
    const sidebarIsCreated = !!document.querySelector(".sidebar");
    if (sidebarIsCreated) {
        mainContentCtn.addEventListener("click", handleClicksHelper);
    } else {
        mainContentCtn.removeEventListener("click", handleClicksHelper);
    }
};

// Toggles sidebar buttons visibility and sidebar state based on device type (mobile or not).
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

// Updates navigation bar, adjusts for mobile view, and removes blur on resize.
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

// Scroll to the selected section on the page.
const handleScrolling = (selectedSection) => {
    const sections = {
        aboutUs: document.getElementById("about-us-container"),
        programs: document.getElementById("programs-container"),
        contactInfo: document.getElementById("contact-info-container"),
    };

    sections[selectedSection].scrollIntoView();
};

// Toggles "selected" class on nav options based on selection.
const handleSelectedStyles = (selectedOption) => {
    const navOptions = {
        aboutUsOption: document.getElementById("selected-about-us"),
        programsOption: document.getElementById("selected-programs"),
        contactInfoOption: document.getElementById("selected-contact-info"),
    };

    for (const [optionName, option] of Object.entries(navOptions)) {
        if (optionName === selectedOption) {
            option.classList.add("selected");
        } else {
            option.classList.remove("selected");
        }
    }
};

// Applies "selected" class to nav links based on scroll position and section visibility.
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

// Handles nav link clicks, scrolls to sections, updates selected style, and hides sidebar on mobile.
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
