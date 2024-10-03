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
    const allPrograms = document.getElementsByClassName("programs");
    let ctnOnePos, ctnTwoPos, ctnThreePos;

    ctnOnePos = allPrograms[0].getBoundingClientRect().left;
    ctnTwoPos = allPrograms[1].getBoundingClientRect().left;
    ctnThreePos = allPrograms[2].getBoundingClientRect().left;

    adjustMobileViewAlignment(ctnOnePos, ctnTwoPos, ctnThreePos);

    window.addEventListener("resize", () => {
        ctnOnePos = allPrograms[0].getBoundingClientRect().left;
        ctnTwoPos = allPrograms[1].getBoundingClientRect().left;
        ctnThreePos = allPrograms[2].getBoundingClientRect().left;
        adjustMobileViewAlignment(ctnOnePos, ctnTwoPos, ctnThreePos);
    });
};

export { alignPrograms };
