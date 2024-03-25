const automaticScrolling = () => {
  const el = document.getElementById("images");
  const imgOne = document.getElementById("img1-container");
  const imgTwo = document.getElementById("img2-container");
  const imgThree = document.getElementById("img3-container");

  let imgOneBounding,
    imgTwoBounding,
    imgThreeBounding = 0;

  // let waitTime = 0;

  const imgCtnBounding = el.getBoundingClientRect();

  setInterval(() => {
    // waitTime = 5000;
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
      // waitTime = 3000;
    } else if (
      imgTwoBounding.left < imgCtnBounding.left &&
      imgTwoBounding.right > imgCtnBounding.left
    ) {
      el.scrollBy({
        left: imgThreeBounding.right - imgCtnBounding.right,
        behavior: "smooth",
      });
      // waitTime = 3000;
    } else if (
      imgThreeBounding.left === imgCtnBounding.left &&
      imgThreeBounding.right === imgCtnBounding.right &&
      imgOneBounding.left < 0
    ) {
      el.scrollBy({
        left: imgOneBounding.left - imgThreeBounding.left,
        behavior: "instant",
      });
      // waitTime = 5000;
    } else {
      el.scrollBy({
        left: imgCtnBounding.width + 5,
        behavior: "smooth",
      });
      // waitTime = 5000;
    }
  }, 5000); // can take waitTime as the parameter

  // TODO:
  // 1. When users has their mouse on the images, stop the automatic scrolling.
  // *** Optimize the time/speed it scroll to the next image in the if/else if.

  // el.addEventListener("mouseover", () => {

  // })
};

export { automaticScrolling };
