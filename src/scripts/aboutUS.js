const automaticScrolling = () => {
  const el = document.getElementById("images");
  const imageOneBounding = document
    .getElementById("img1-container")
    .getBoundingClientRect();
  // console.log(imageOneBounding);

  // setInterval(() => {
  //   el.scrollBy({
  //     left: imageOneBounding.width,
  //     behavior: "smooth",
  //   });
  // }, 3000);
};

export { automaticScrolling };
