// Get the display style of the first image
const getDisplayStyle = (imgOne) => {
    return window.getComputedStyle(imgOne).getPropertyValue("display");
};

// Return true if the image is partially visible, otherwise return false.
const isPartiallyVisible = (ctnBounding, imgBounding) => {
    return (
        imgBounding.left < ctnBounding.left &&
        imgBounding.right > ctnBounding.left
    );
};

// Return true if the currently visible image is the last image, otherwise return false.
const isLastImage = (ctnBounding, imgOneBounding, imgThreeBounding) => {
    return (
        imgOneBounding.left < 0 && imgThreeBounding.left - 2 < ctnBounding.left
    );
};

// Scroll to the next available image
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

    // ResizeObserver will be used here
};

// Automatic Scrolling of the images
// When a cursor is on the image container, stop the automatic scrolling until the user moves the cursor away.
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
