const automaticScrolling = () => {
  const el = document.getElementById("images");
  const imgOne = document.getElementById("img1-container");
  const imgTwo = document.getElementById("img2-container");
  const imgThree = document.getElementById("img3-container");

  let imgOneBounding,
    imgTwoBounding,
    imgThreeBounding = 0;

  const imgCtnBounding = el.getBoundingClientRect();

  setInterval(() => {
    imgOneBounding = imgOne.getBoundingClientRect();
    imgTwoBounding = imgTwo.getBoundingClientRect();
    imgThreeBounding = imgThree.getBoundingClientRect();
    if (
      imgOneBounding.left < imgCtnBounding.left &&
      imgOneBounding.right > imgCtnBounding.left
    ) {
      el.scrollBy({
        left: imgTwoBounding.right - imgCtnBounding.right,
        behavior: "smooth",
      });
    } else if (
      imgTwoBounding.left < imgCtnBounding.left &&
      imgTwoBounding.right > imgCtnBounding.left
    ) {
      el.scrollBy({
        left: imgThreeBounding.right - imgCtnBounding.right,
        behavior: "smooth",
      });
    } else if (
      imgThreeBounding.left === imgCtnBounding.left &&
      imgThreeBounding.right === imgCtnBounding.right &&
      imgOneBounding.left < 0
    ) {
      el.scrollBy({
        left: imgOneBounding.left - imgThreeBounding.left,
        behavior: "instant",
      });
    } else {
      el.scrollBy({
        left: imgCtnBounding.width + 5,
        behavior: "smooth",
      });
    }
  }, 5000);

  // TODO:
  // 1. When users has their mouse on the images, stop the automatic scrolling.

  // el.addEventListener("mouseover", () => {

  // })
};

export { automaticScrolling };
