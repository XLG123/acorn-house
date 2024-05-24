// Add a margin to the bottom of the container if the container's height changes, otherwise set it to 0px.
const addMargin = (el, parentCtn) => {
    if (el.offsetHeight !== 24) {
        parentCtn.style.marginBottom = "1em";
    } else {
        parentCtn.style.marginBottom = "0px";
    }
};

// Restructure the layout of the subtitle when screen size changes and the Chinese Subtitle is wrapping onto the next line.
const restructureSubtitle = () => {
    const subtitleCtn = document.getElementById("subtitle-content");
    const chnSubtitle = subtitleCtn.children[1].children[1];
    addMargin(chnSubtitle, subtitleCtn);
    window.addEventListener("resize", () => {
        addMargin(chnSubtitle, subtitleCtn);
    })
};

export { restructureSubtitle };
