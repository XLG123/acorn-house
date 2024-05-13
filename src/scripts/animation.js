const pauseAnimations = () => {
    const el = document.getElementById("location-icon");
    let currentWidth = window.innerWidth;
    if (currentWidth < 750 && el) {
        el.style.animationPlayState = "paused";
    }
    window.addEventListener("resize", () => {
        currentWidth = window.innerWidth;
        if (currentWidth < 750 && el) {
            el.style.animationPlayState = "paused";
        } else {
            el.style.animationPlayState = "running";
        }
    });
};

const disableAnimationHelper = (leftArrow, rightArrow, currentWidth) => {
    if (currentWidth < 600) {
		leftArrow.style.display = "none";
		rightArrow.style.display = "none";
	} else if (currentWidth < 750) {
		leftArrow.style.display = "block";
		rightArrow.style.display = "block";
		leftArrow.style.animationPlayState = "paused";
		rightArrow.style.animationPlayState = "paused";
    } else {
        leftArrow.style.animationPlayState = "running";
        rightArrow.style.animationPlayState = "running";
    }
};

const disableAnimation = () => {
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    let currentWidth = window.innerWidth;
    disableAnimationHelper(leftArrow, rightArrow, currentWidth);

    window.addEventListener("resize", () => {
        currentWidth = window.innerWidth;
        disableAnimationHelper(leftArrow, rightArrow, currentWidth);
    });
};

export { pauseAnimations, disableAnimation };

// TODO: Modify the layout of the sub-title of contact-info container's online contact
// 1. restructure the sub-title
// 2. remove all the welcoming texts
// Aim for mobile devices
