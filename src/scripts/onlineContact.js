// Add bottom margin to parent container if element height is not 24px.
const addMargin = (el, parentCtn) => {
    if (el.offsetHeight !== 24) {
        parentCtn.style.marginBottom = "1em";
    } else {
        parentCtn.style.marginBottom = "0px";
    }
};

// Observe Chinese subtitle size and adjust subtitle container when it changes.
const restructureSubtitle = () => {
    const subtitleCtn = document.getElementById("subtitle-content");
    const chnSubtitle = subtitleCtn.children[1].children[1];

    addMargin(chnSubtitle, subtitleCtn);

    const sizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
            addMargin(entry.target, subtitleCtn);
        });
    });

    sizeObserver.observe(chnSubtitle);
};

export { restructureSubtitle };
