const adjustMobileViewAlignment = (boundingOne, boundingTwo, boundingThree) => {
    let mobileView;
    if (boundingOne + 10 >= boundingTwo && boundingTwo + 5 >= boundingThree) {
        mobileView = true;
    } else {
        mobileView = false;
    }

    const allPrograms = document.getElementsByClassName("programs");
    for (const program of allPrograms) {
        program.classList.toggle("mobile-view-available-programs", mobileView);
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

    let ctnOnePos, ctnTwoPos, ctnThreePos;

    ctnOnePos = afterSchool.getBoundingClientRect().left;
    ctnTwoPos = enrichmentClasses.getBoundingClientRect().left;
    ctnThreePos = languageLearning.getBoundingClientRect().left;

    adjustMobileViewAlignment(ctnOnePos, ctnTwoPos, ctnThreePos);

    window.addEventListener("resize", () => {
        ctnOnePos = afterSchool.getBoundingClientRect().left;
        ctnTwoPos = enrichmentClasses.getBoundingClientRect().left;
        ctnThreePos = languageLearning.getBoundingClientRect().left;
        adjustMobileViewAlignment(ctnOnePos, ctnTwoPos, ctnThreePos);
    });
};

export { alignPrograms };
