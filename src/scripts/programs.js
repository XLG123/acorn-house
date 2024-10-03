const adjustMobileViewAlignment = (mobileView) => {
    const allPrograms = document.getElementsByClassName("programs");

    for (const program of allPrograms) {
        if (mobileView) {
            program.classList.add("mobile-view-available-programs");
        } else {
            program.classList.remove("mobile-view-available-programs");
        }
    }
};

const alignProgramsHelper = (boundingOne, boundingTwo, boundingThree) => {
    let mobileView;
    if (boundingOne + 10 >= boundingTwo && boundingTwo + 5 >= boundingThree) {
        mobileView = true;
    } else {
        mobileView = false;
    }
    adjustMobileViewAlignment(mobileView);
};

const alignPrograms = () => {
    const afterSchool = document.getElementById("after-school-container");
    const enrichmentClasses = document.getElementById(
        "enrichment-classes-container"
    );
    const languageLearning = document.getElementById(
        "language-learning-container"
    );

    let ctnOnePos, ctnTwoPos, ctnThreePos;

    ctnOnePos = afterSchool.getBoundingClientRect().left;
    ctnTwoPos = enrichmentClasses.getBoundingClientRect().left;
    ctnThreePos = languageLearning.getBoundingClientRect().left;

    alignProgramsHelper(ctnOnePos, ctnTwoPos, ctnThreePos);

    window.addEventListener("resize", () => {
        ctnOnePos = afterSchool.getBoundingClientRect().left;
        ctnTwoPos = enrichmentClasses.getBoundingClientRect().left;
        ctnThreePos = languageLearning.getBoundingClientRect().left;

        // Call the alignProgramsHelper Function to check the alignment
        alignProgramsHelper(ctnOnePos, ctnTwoPos, ctnThreePos);
    });
};

export { alignPrograms };
