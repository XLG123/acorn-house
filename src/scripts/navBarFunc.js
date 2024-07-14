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

export { reloadPage, scrollToPart };
