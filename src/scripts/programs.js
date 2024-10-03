const getAllLeftPos = (allPrograms) => {
    const allLeftPos = [];
    for (let i = 0; i < 3; ++i) {
        allLeftPos.push(allPrograms[i].getBoundingClientRect().left);
    }
    return allLeftPos;
};

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
    // as: short for after school,
    // ec: short for enrichment classes,
    // ll: short for language learning
    let [asLeftPos, ecLeftPos, llLeftPos] = getAllLeftPos(allPrograms);
    adjustMobileViewAlignment(asLeftPos, ecLeftPos, llLeftPos);

    window.addEventListener("resize", () => {
        [asLeftPos, ecLeftPos, llLeftPos] = getAllLeftPos(allPrograms);
        adjustMobileViewAlignment(asLeftPos, ecLeftPos, llLeftPos);
    });
};

export { alignPrograms };
