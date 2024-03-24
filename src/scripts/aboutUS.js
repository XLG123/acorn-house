const automaticScrolling = () => {
  const el = document.getElementById("images");
  const imageOne = document.getElementById("img1-container");
  const imageTwo = document.getElementById("img2-container");
  const imageThree = document.getElementById("img3-container");

  let imageOneBounding,
    imageTwoBounding,
    imageThreeBounding = 0;

  let width = 0;

  setInterval(() => {
    imageOneBounding = imageOne.getBoundingClientRect();
    imageTwoBounding = imageTwo.getBoundingClientRect();
    imageThreeBounding = imageThree.getBoundingClientRect();
    console.log(imageOneBounding, imageTwoBounding, imageThreeBounding);
    el.scrollBy({
      left: 542,
      behavior: "smooth",
    });
  }, 5000);

  // TODO:
  // 1. When users has their mouse on the images, stop the automatic scrolling.
  // 2. When a part of the image is hidden, scroll to the next image.
  // 3. When it automatically scrolls to the third image, goes back to the first image after 5 seconds.

  // el.addEventListener("mouseover", () => {

  // })
};

export { automaticScrolling };
