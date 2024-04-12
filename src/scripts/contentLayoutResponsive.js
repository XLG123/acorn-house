import platform from "platform";
import { alignPrograms } from "./programs";

const cl = console.log.bind(console);

const modifyProgramsWidth = () => {
  const afterSchoolCtn = document.getElementById("after-school-container");
  const enrichmentClassesCtn = document.getElementById(
    "enrichment-classes-container"
  );
  const languageLearningCtn = document.getElementById(
    "language-learning-container"
  );
  const examPrepCtn = document.getElementById("exam-prep-container");
  afterSchoolCtn.style.padding = "0.5em 8vw";
  enrichmentClassesCtn.style.padding = "0.5em 8vw";
  languageLearningCtn.style.padding = "0.5em 8vw";
  examPrepCtn.style.padding = "0.5em 8vw";
};

const removeTitleBgImg = () => {
  const programsTitle = document.getElementById("programs-title");
  programsTitle.style.backgroundImage =
    'url("acorn-house/src/assets/images/programs-paper.png"), url("acorn-house/src/assets/images/acornBanner2.png")';
  programsTitle.style.backgroundRepeat = "no-repeat, space repeat";
  programsTitle.style.backgroundPosition = "left 50% top 0.25em";
  programsTitle.style.backgroundSize = "8em, 4em";
};

const responsiveLayout = () => {
  alignPrograms();
  // TODO:
  // Modify the size of the content container for mobile/tablet view
  const contentCtn = document.getElementById("content-container");
  if (
    platform.os.family.includes("iOS") ||
    platform.os.family.includes("Android")
  ) {
    contentCtn.style.paddingLeft = "2em";
    contentCtn.style.paddingRight = "2em";
    modifyProgramsWidth();
    removeTitleBgImg();
  }
};

export { responsiveLayout };
