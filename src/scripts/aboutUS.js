const automaticScrolling = () => {
  const el = document.getElementById("images");
  const imageOneBounding = document
    .getElementById("img1-container")
    .getBoundingClientRect();

  const imageTwoBounding = document
    .getElementById("img2-container")
    .getBoundingClientRect();

  const imageThreeBounding = document
    .getElementById("img3-container")
    .getBoundingClientRect();
  
  const width = imageOneBounding.width + 5;
    
  // setInterval(() => {
  //   console.log(imageTwoBounding);
  //   console.log(imageThreeBounding);
  //   el.scrollBy({
  //     left: width,
  //     behavior: "smooth",
  //   });
  // }, 5000);

  // TODO:
  // 1. When users has their mouse on the images, stop the automatic scrolling.
  // 2. When a part of the image is hidden, scroll to the next image.
  // 3. When it automatically scrolls to the third image, goes back to the first image after 5 seconds.

  // el.addEventListener("mouseover", () => {

  // })
};

export { automaticScrolling };
