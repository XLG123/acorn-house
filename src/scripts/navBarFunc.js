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

	let optionOneIsClicked = false;
	let optionTwoIsClicked = false;
	let optionThreeIsClicked = false;

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
			optionOneIsClicked = true;
			optionTwoIsClicked = false;
			optionThreeIsClicked = false;
        } else if (target.contains("programs-option")) {
            programsSection.scrollIntoView();
            programs.classList.add("selected");
            if (aboutUs.classList.contains("selected")) {
                aboutUs.classList.remove("selected");
            } else if (contactInfo.classList.contains("selected")) {
                contactInfo.classList.remove("selected");
            }
			optionOneIsClicked = false;
			optionTwoIsClicked = true;
			optionThreeIsClicked = false;
        } else {
            contactInfoSection.scrollIntoView();
            contactInfo.classList.add("selected");
			optionOneIsClicked = false;
			optionTwoIsClicked = false;
			optionThreeIsClicked = true;
        }
		removeSelectedStyle(optionOneIsClicked, optionTwoIsClicked, optionThreeIsClicked);
    });
	removeSelectedStyle(false, false, false);
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
const removeSelectedStyle = (optionOne, optionTwo, optionThree) => {
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
			if (optionOne && !optionTwo && !optionThree) {
				if (programs.classList.contains("selected")) {
					programs.classList.remove("selected");
				}
				if (contactInfo.classList.contains("selected")) {
					contactInfo.classList.remove("selected");
				}
			} else if (!optionOne && !optionTwo && optionThree) {
				if (aboutUs.classList.contains("selected")) {
					aboutUs.classList.remove("selected");
				}
				if (programs.classList.contains("selected")) {
					programs.classList.remove("selected");
				}
			} else if (!optionOne && !optionThree) {
				programs.classList.add("selected");
				if (aboutUs.classList.contains("selected")) {
					aboutUs.classList.remove("selected");
				}
				if (contactInfo.classList.contains("selected")) {
					contactInfo.classList.remove("selected");
				}
			} // else {
			// 	programs.classList.add("selected");
            //     if (aboutUs.classList.contains("selected")) {
			// 		aboutUs.classList.remove("selected");
            //     }
            //     if (contactInfo.classList.contains("selected")) {
			// 		contactInfo.classList.remove("selected");
            //     }
			// }
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
		// console.log(optionOne);
		// console.log(optionTwo);
		// console.log(optionThree);
    });
};

export { reloadPage, scrollToPart };

// TODO:
// --- BUG: nav bar link delay
// --- BUG: nav bar scrolling, selected style is not applied on programs

// 1. Restructure the layout of About Us container -> make it responsive from css, reduce load time. (try as much as on css)
// --- a. The automatic scrolling of the images should also be responsive
