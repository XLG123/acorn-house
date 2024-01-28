const reloadPage = () => {
  const schoolName = document.getElementById("school-name-container");
  schoolName.addEventListener("click", () => {
    document.location.reload();
  })
}

export { reloadPage }