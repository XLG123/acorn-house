const reloadPage = () => {
	const schoolName = document.getElementById("school-name-container");
	schoolName.addEventListener("click", () => {
		document.location.reload();
	});
};

const scrollToPart = () => {
	const navLinks = document.getElementById("nav-links");
	const aboutUSSection = document.getElementById("about-us-container");
	const programsSection = document.getElementById("programs-container");
	const contactInfoSection = document.getElementById(
		"contact-info-container"
	);
	const aboutUs = document.getElementById("selected-about-us");
	const programs = document.getElementById("selected-programs");
	const contactInfo = document.getElementById("selected-contact-info");

	navLinks.addEventListener("click", (e) => {
		const target = e.target.classList;
		if (target.contains("about-us-option")) {
			aboutUSSection.scrollIntoView();
			aboutUs.classList.add("selected");
			if (programs.classList.contains("selected")) {
				programs.classList.remove("selected");
			} else if (contactInfo.classList.contains("selected")) {
				contactInfo.classList.remove("selected");
			}
		} else if (target.contains("programs-option")) {
			programsSection.scrollIntoView();
			programs.classList.add("selected");
			if (aboutUs.classList.contains("selected")) {
				aboutUs.classList.remove("selected");
			} else if (contactInfo.classList.contains("selected")) {
				contactInfo.classList.remove("selected");
			}
		} else {
			contactInfoSection.scrollIntoView();
			contactInfo.classList.add("selected");
		}
	});
	removeSelectedStyle();
};

const isFullyVisible = (container) => {
	const viewportHeight = window.innerHeight;
	const pos = container.getBoundingClientRect();
	if (pos.top < 0 || pos.bottom > viewportHeight) {
		return false;
	} else {
		return true;
	}
};

// Remove the styling from the selected navigation item when it detects scrolling
const removeSelectedStyle = () => {
	const aboutUSSection = document.getElementById("about-us-container");
	const programsSection = document.getElementById("programs-container");
	const contactInfoSection = document.getElementById(
		"contact-info-container"
	);

	const aboutUs = document.getElementById("selected-about-us");
	const programs = document.getElementById("selected-programs");
	const contactInfo = document.getElementById("selected-contact-info");

	document.addEventListener("scroll", () => {
		if (isFullyVisible(aboutUSSection)) {
			aboutUs.classList.add("selected");
			if (programs.classList.contains("selected")) {
				programs.classList.remove("selected");
			}
			if (contactInfo.classList.contains("selected")) {
				contactInfo.classList.remove("selected");
			}
		} else if (isFullyVisible(programsSection)) {
			programs.classList.add("selected");
			if (aboutUs.classList.contains("selected")) {
				aboutUs.classList.remove("selected");
			}
			if (contactInfo.classList.contains("selected")) {
				contactInfo.classList.remove("selected");
			}
		} else if (isFullyVisible(contactInfoSection)) {
			contactInfo.classList.add("selected");
			if (aboutUs.classList.contains("selected")) {
				aboutUs.classList.remove("selected");
			}
			if (programs.classList.contains("selected")) {
				programs.classList.remove("selected");
			}
		} else {
			aboutUs.classList.remove("selected");
			programs.classList.remove("selected");
			contactInfo.classList.remove("selected");
		}
	});
};

// Return true if the display style of the specific element is grid, otherwise return false.
const isGrid = (el) => {
	return window.getComputedStyle(el).getPropertyValue("display") === "grid";
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

// Return true if screen size is less than or equal to 450px, otherwise return false.
const isMobile = () => {
	return window.innerWidth <= 450;
}

// Display navigation sidebar.
const displaySidebar = () => {
	const sidebar = document.getElementById("nav-links-container");
	sidebar.style.display = "block";
}

// Insert a sidebar toggle button at the beginning of the navigation bar.
const insertSidebarButton = () => {
	const navBarCtn = document.getElementById("nav-bar-container");
	const sidebarBtn = document.createElement("div");
	const sidebarIcon = document.createElement("i");

	sidebarBtn.setAttribute("id", "sidebar-btn");
	sidebarIcon.classList.add("fa-solid", "fa-bars");
	sidebarIcon.addEventListener("click", () => {
		displaySidebar();
	})

	sidebarBtn.appendChild(sidebarIcon);
	navBarCtn.insertBefore(sidebarBtn, navBarCtn.firstChild);
}

// Manage the visibility of the sidebar button based on whether the device is a mobile device.
// Insert the sidebar button if it's a mobile device and the button doesn't exist. Otherwise removes the button.
const navBarMobileView = () => {
	const sidebarBtn = document.getElementById("sidebar-btn");
	if (isMobile()) {
		if (!sidebarBtn) {
			insertSidebarButton();
		}
	} else {
		sidebarBtn?.remove();
	}
}

// Update the navigation bar.
const updateNavigationBar = () => {
	const navLinks = document.getElementsByClassName("nav-option");
	updateNavigationItem(navLinks);
	navBarMobileView();
	window.addEventListener("resize", () => {
		updateNavigationItem(navLinks);
		navBarMobileView();
	});
};

export { reloadPage, scrollToPart, updateNavigationBar };
