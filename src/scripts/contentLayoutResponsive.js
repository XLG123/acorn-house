import { alignPrograms } from "./programs";

const cl = console.log.bind(console);

// const removeTitleBgImg = () => {
//   const programsTitle = document.getElementById("programs-title");
//   programsTitle.style.backgroundImage =
//     'url("../../src/assets/images/programs-paper.png"), url("../../src/assets/images/acornBanner2.png")';
//   programsTitle.style.backgroundRepeat = "no-repeat, space repeat";
//   programsTitle.style.backgroundPosition = "left 50% top 0.25em";
//   programsTitle.style.backgroundSize = "8em, 4em";
// };

const modifyProgramsWidth = (windowWidth) => {
  const afterSchoolCtn = document.getElementById("after-school-container");
  const enrichmentClassesCtn = document.getElementById(
    "enrichment-classes-container"
  );
  const languageLearningCtn = document.getElementById(
    "language-learning-container"
  );
  const examPrepCtn = document.getElementById("exam-prep-container");
  if (windowWidth < 450) { // Mobile Padding
    afterSchoolCtn.style.padding = "0.5em 8vw";
    enrichmentClassesCtn.style.padding = "0.5em 8vw";
    languageLearningCtn.style.padding = "0.5em 8vw";
    examPrepCtn.style.padding = "0.5em 8vw";
  } else { // Tablet and Desktop Padding
    afterSchoolCtn.style.padding = "0.5em 2.5vw";
    enrichmentClassesCtn.style.padding = "0.5em 2.5vw";
    languageLearningCtn.style.padding = "0.5em 2.5vw";
    examPrepCtn.style.padding = "0.5em 2.5vw";
  } 
};

const modifyContentWidth = () => {
  const contentCtn = document.getElementById("content-container");
  const windowWidth = window.innerWidth;
  if (windowWidth < 450) { // Mobile View
    contentCtn.style.paddingLeft = "2em";
    contentCtn.style.paddingRight = "2em";
    cl("mobile view");
    // removeTitleBgImg();
  } else if (windowWidth < 1500) {
    contentCtn.style.paddingLeft = "4em";
    contentCtn.style.paddingRight = "4em";
  } else {
    contentCtn.style.paddingLeft = "10em";
    contentCtn.style.paddingRight = "10em";
  }
  modifyProgramsWidth(windowWidth);
};

const responsiveLayout = () => {
  alignPrograms();
  // modifyContentWidth();
  // window.addEventListener("resize", () => {
  //   modifyContentWidth();
  // })
};

export { responsiveLayout };
