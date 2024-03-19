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
  const contactInfoSection = document.getElementById("contact-info-container");
  const aboutUs = document.getElementById("selected-about-us");
  const programs = document.getElementById("selected-programs");
  const contactInfo = document.getElementById("selected-contact-info");
  navLinks.addEventListener("click", (e) => {
    if (e.target.classList.contains("about-us-option")) {
      aboutUSSection.scrollIntoView();
      aboutUs.classList.add("selected");
      if (programs.classList.contains("selected")) {
        programs.classList.remove("selected");
      } else if (contactInfo.classList.contains("selected")) {
        contactInfo.classList.remove("selected");
      }
    } else if (e.target.classList.contains("programs-option")) {
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
      if (aboutUs.classList.contains("selected")) {
        aboutUs.classList.remove("selected");
      } else if (programs.classList.contains("selected")) {
        programs.classList.remove("selected");
      }
    }
  });
};

export { reloadPage, scrollToPart };
