const alignPrograms = () => {
  const afterSchool = document.getElementById("after-school-container");
  const enrichmentClasses = document.getElementById(
    "enrichment-classes-container"
  );
  const languageLearning = document.getElementById(
    "language-learning-container"
  );
  const examPrep = document.getElementById("exam-prep-container");

  let ctnOnePos,
    ctnTwoPos,
    ctnThreePos;

  let verticalAlign = false;

  window.addEventListener("resize", () => {
    ctnOnePos = afterSchool.getBoundingClientRect().left;
    ctnTwoPos = enrichmentClasses.getBoundingClientRect().left;
    ctnThreePos = languageLearning.getBoundingClientRect().left;

    if (ctnOnePos + 10 >= ctnTwoPos && ctnTwoPos + 5 >= ctnThreePos) {
      verticalAlign = true;
    } else {
      verticalAlign = false;
    }

    if (verticalAlign) {
      afterSchool.classList.add("mobile-view-available-programs");
      enrichmentClasses.classList.add("mobile-view-available-programs");
      languageLearning.classList.add("mobile-view-available-programs");
      examPrep.classList.add("mobile-view-available-programs");
    } else {
      afterSchool.classList.remove("mobile-view-available-programs");
      enrichmentClasses.classList.remove("mobile-view-available-programs");
      languageLearning.classList.remove("mobile-view-available-programs");
      examPrep.classList.remove("mobile-view-available-programs");
    }
  });
};

export { alignPrograms };
