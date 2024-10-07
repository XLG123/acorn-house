// Get left positions of program elements
const getAllLeftPos = (programs) => {
    return programs.map((program) => program.getBoundingClientRect().left);
};

// Adjust alignment for mobile view
const adjustMobileViewAlignment = (asLeftPos, ecLeftPos, llLeftPos) => {
    let mobileView;
    if (asLeftPos + 10 >= ecLeftPos && ecLeftPos + 5 >= llLeftPos) {
        mobileView = true;
    } else {
        mobileView = false;
    }

    const allPrograms = document.getElementsByClassName("programs");
    for (const program of allPrograms) {
        program.classList.toggle("mobile-view-available-programs", mobileView);
    }
};

// Align programs and handle window resize
const alignPrograms = () => {
    const allPrograms = document.getElementsByClassName("programs");
    const selectedPrograms = Array.from(allPrograms).slice(0, 3);

    // Abbreviations: as = after school, ec = enrichment classes, ll = language learning
    let [asLeftPos, ecLeftPos, llLeftPos] = getAllLeftPos(selectedPrograms);
    adjustMobileViewAlignment(asLeftPos, ecLeftPos, llLeftPos);

    window.addEventListener("resize", () => {
        [asLeftPos, ecLeftPos, llLeftPos] = getAllLeftPos(selectedPrograms);
        adjustMobileViewAlignment(asLeftPos, ecLeftPos, llLeftPos);
    });
};

export { alignPrograms };
