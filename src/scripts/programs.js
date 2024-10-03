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
    // Abbreviations: as = after school, ec = enrichment classes, ll = language learning
    let [asLeftPos, ecLeftPos, llLeftPos] = getAllLeftPos(allPrograms);
    adjustMobileViewAlignment(asLeftPos, ecLeftPos, llLeftPos);

    window.addEventListener("resize", () => {
        [asLeftPos, ecLeftPos, llLeftPos] = getAllLeftPos(allPrograms);
        adjustMobileViewAlignment(asLeftPos, ecLeftPos, llLeftPos);
    });
};

export { alignPrograms };
