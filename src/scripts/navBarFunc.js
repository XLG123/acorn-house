const reloadPage = () => {
  const schoolName = document.getElementById("school-name-container");
  schoolName.addEventListener("click", () => {
    document.location.reload();
  })
}

const scrollToPart = () => {
  const navLinks = document.getElementById("nav-links");
  const aboutUSSection = document.getElementById("about-us-container");
  const programsSection = document.getElementById("programs-container");
  const contactInfoSection = document.getElementById("contact-info-container");
  navLinks.addEventListener("click", (e) => {
    if (e.target.classList.contains("about-us-option")) {
      aboutUSSection.scrollIntoView();
    } else if (e.target.classList.contains("programs-option")) {
      programsSection.scrollIntoView();
    } else {
      contactInfoSection.scrollIntoView();
    }
  });
}

export { reloadPage, scrollToPart }