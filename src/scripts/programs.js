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

// TODO: will change it to CSS media queries

export { alignPrograms };
