const modifyYear = () => {
  let today = new Date();
  let currYear = today.getFullYear();
  let el = document.getElementById("curr-year");
  el.textContent = currYear;
}

export { modifyYear }