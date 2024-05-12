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

export { pauseAnimations };

// TODO: Remove animations for screen sizes that is less than 750px
// Aim for small tablets and mobile devices