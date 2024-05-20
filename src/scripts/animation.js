// Check the screen size to modify Arrow Icons' animation
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

// Call the helper function to modify Arrow Icon's animation
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

export { disableAnimation };

// TODO: Modify the layout of the sub-title of contact-info container's online contact
// 3. restructure the layout of the online contact info such as email, tel, and wechat qr code 
// Switch to CSS styling instead of adding too much scripts to the webpage
