const automaticScrolling = () => {
  const el = document.getElementById("images");
  const imgOne = document.getElementById("img1-container");
  const imgTwo = document.getElementById("img2-container");
  const imgThree = document.getElementById("img3-container");

  let imgOneBounding,
    imgTwoBounding,
    imgThreeBounding = 0;

  const imgCtnBounding = el.getBoundingClientRect();

  const imgScroll = () => {
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
  };

  let scrollTimer = setInterval(imgScroll, 5000);

  el.addEventListener("mouseover", () => {
    clearInterval(scrollTimer);
  });

  el.addEventListener("mouseleave", () => {
    scrollTimer = setInterval(imgScroll, 5000);
  });
};

export { automaticScrolling };
