// Return true if screen size is less than or equal to 450px, otherwise return false.
const isMobile = () => {
    return window.innerWidth <= 450;
};

// Return true if the display style of the specific element is grid, otherwise return false.
const isGrid = (el) => {
    return window.getComputedStyle(el).getPropertyValue("display") === "grid";
};

// Return true if the sidebar is shown as a block, otherwise return false.
const isShown = (sidebar) => {
    return (
        window.getComputedStyle(sidebar).getPropertyValue("display") === "block"
    );
};

//  Reloads the page when the school name is clicked, unless on mobile with the sidebar visible.
const triggerReload = () => {
    const schoolName = document.getElementById("school-name-container");
    schoolName.addEventListener("click", () => {
		const sidebar = document.querySelector(".sidebar");
		if (!isMobile() || !isShown(sidebar)) {
			document.location.reload();
		} else {
			// TODO: exit the sidebar, and apply the appropriate styling
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

// Toggles the sidebar visibility and apply blur effect when sidebar is shown, otherwise removes the blur effect.
const toggleSidebar = (display) => {
    const sidebar = document.getElementById("nav-links-container");
    if (display) {
        sidebar.style.display = "block";
        applyBlurEffect();
    } else {
        sidebar.style.display = "none";
        removeBlurEffect();
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

// Insert a close button on the upper right corner of the sidebar.
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

// Handle clicks outside the sidebar when sidebar is shown.
const handleClicksOutsideSidebar = () => {
	const mainContentCtn = document.getElementById("content-container");
	const sidebarIsShown = !!document.querySelector(".sidebar");
	if (sidebarIsShown) {
		mainContentCtn.addEventListener("click", handleClicksHelper);
	} else {
		mainContentCtn.removeEventListener("click", handleClicksHelper);
	}
};

// Manage the visibility of the sidebar button and close sidebar button based on whether the device is a mobile device.
const navBarMobileView = () => {
    const sidebarBtn = document.getElementById("sidebar-btn");
    const closeBtn = document.getElementById("close-sidebar-btn");
    const navigationLinks = document.getElementById("nav-links-container");
    if (isMobile()) {
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

// Update the navigation bar.
// removeBlurEffect is called to remove all blur effects when users forget to exit the sidebar while changing screen sizes.
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

// Adds or removes the "selected" class from navigation links based on the visibility of corresponding sections in the viewport as the user scrolls the page
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

// Detect a user's clicks on navigation links and scrolls the page to the corresponding section, updating the selected style and hiding the sidebar on mobile.
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

        if (isMobile()) {
            toggleSidebar(false);
        }

        handleScrolling(selectedSection);
    });

    applySelectedStyle();
};

export { triggerReload, updateNavigationBar, scrollToPart };
