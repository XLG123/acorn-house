const alignProgramsHelper = (
  eleOne,
  eleTwo,
  eleThree,
  eleFour,
  boundingOne,
  boundingTwo,
  boundingThree,
  verticalAlignment
) => {
  if (boundingOne + 10 >= boundingTwo && boundingTwo + 5 >= boundingThree) {
    verticalAlignment = true;
  } else {
    verticalAlignment = false;
  }

  if (verticalAlignment) {
    eleOne.classList.add("mobile-view-available-programs");
    eleTwo.classList.add("mobile-view-available-programs");
    eleThree.classList.add("mobile-view-available-programs");
    eleFour.classList.add("mobile-view-available-programs");
  } else {
    eleOne.classList.remove("mobile-view-available-programs");
    eleTwo.classList.remove("mobile-view-available-programs");
    eleThree.classList.remove("mobile-view-available-programs");
    eleFour.classList.remove("mobile-view-available-programs");
  }
};

const alignPrograms = () => {
  const afterSchool = document.getElementById("after-school-container");
  const enrichmentClasses = document.getElementById(
    "enrichment-classes-container"
  );
  const languageLearning = document.getElementById(
    "language-learning-container"
  );
  const examPrep = document.getElementById("exam-prep-container");

  let ctnOnePos, ctnTwoPos, ctnThreePos;

  let verticalAlign = false;

  ctnOnePos = afterSchool.getBoundingClientRect().left;
  ctnTwoPos = enrichmentClasses.getBoundingClientRect().left;
  ctnThreePos = languageLearning.getBoundingClientRect().left;

  alignProgramsHelper(
    afterSchool,
    enrichmentClasses,
    languageLearning,
    examPrep,
    ctnOnePos,
    ctnTwoPos,
    ctnThreePos,
    verticalAlign
  );

  window.addEventListener("resize", () => {
    ctnOnePos = afterSchool.getBoundingClientRect().left;
    ctnTwoPos = enrichmentClasses.getBoundingClientRect().left;
    ctnThreePos = languageLearning.getBoundingClientRect().left;

    // Call the alignProgramsHelper Function to check the alignment
    alignProgramsHelper(
      afterSchool,
      enrichmentClasses,
      languageLearning,
      examPrep,
      ctnOnePos,
      ctnTwoPos,
      ctnThreePos
    );
  });
};

const removeTitleBgImg = () => {
  // const programsTitle = document.getElementById("programs-title");
  // programsTitle.style.backgroundImage =
  //   'url("../../src/assets/images/programs-paper.png"), url("../../src/assets/images/acornBanner2.png")';
  // programsTitle.style.backgroundRepeat = "no-repeat, space repeat";
  // programsTitle.style.backgroundPosition = "left 50% top 0.25em";
  // programsTitle.style.backgroundSize = "8em, 4em";
};
  
export { alignPrograms, removeTitleBgImg };
