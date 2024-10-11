// Update the copyright year in the DOM element with id "curr-year".
const modifyYear = () => {
    let today = new Date();
    let currYear = today.getFullYear();
    let el = document.getElementById("curr-year");
    el.textContent = currYear;
};

export { modifyYear };
