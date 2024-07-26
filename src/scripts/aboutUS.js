// 
const getDisplayStyle = (imgOne) => {
    return window.getComputedStyle(imgOne).getPropertyValue("display");
};

// 
const isPartiallyVisible = (ctnBounding, imgBounding) => {
    return (
        imgBounding.left < ctnBounding.left &&
        imgBounding.right > ctnBounding.left
    );
};

// 
const isLastImage = (ctnBounding, imgOneBounding, imgThreeBounding) => {
    return (
        imgOneBounding.left < 0 && imgThreeBounding.left - 2 < ctnBounding.left
    );
};

// 
const performScroll = (ctn, imgOne, imgTwo, imgThree) => {
    const ctnBounding = ctn.getBoundingClientRect();
    const imgOneBounding = imgOne.getBoundingClientRect();
    const imgTwoBounding = imgTwo.getBoundingClientRect();
    const imgThreeBounding = imgThree.getBoundingClientRect();

    if (getDisplayStyle(imgOne) === "inline-block") {
        if (isPartiallyVisible(ctnBounding, imgOneBounding)) {
            ctn.scrollBy({
                left: imgTwoBounding.right - ctnBounding.right,
                behavior: "smooth",
            });
        } else if (isPartiallyVisible(ctnBounding, imgTwoBounding)) {
            ctn.scrollBy({
                left: imgThreeBounding.right - ctnBounding.right,
                behavior: "smooth",
            });
        } else if (
            isLastImage(ctnBounding, imgOneBounding, imgThreeBounding)
        ) {
            ctn.scrollBy({
                left: imgOneBounding.left - imgThreeBounding.left,
                behavior: "instant",
            });
        } else {
            ctn.scrollBy({
                left: ctnBounding.width + 5,
                behavior: "smooth",
            });
        }
    }
};

// 
const automaticScrolling = () => {
    const ctn = document.getElementById("images");
    const imgOne = document.getElementById("img1-container");
    const imgTwo = document.getElementById("img2-container");
    const imgThree = document.getElementById("img3-container");

    const imgScroll = () => {
        performScroll(ctn, imgOne, imgTwo, imgThree);
    };

    let scrollTimer = setInterval(imgScroll, 5000);

    ctn.addEventListener("mouseover", () => {
        clearInterval(scrollTimer);
    });

    ctn.addEventListener("mouseleave", () => {
        scrollTimer = setInterval(imgScroll, 5000);
    });
};

export { automaticScrolling };
