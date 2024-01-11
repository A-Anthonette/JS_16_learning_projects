const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeOut;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeOut);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeOut);
  updateImg();
});

updateImg()

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  // 1 is subtracted because the initial "currentImg" is set to 1 and incremented by (i.e to 2) just before the function is called. So, multiplying currentImg by 500 in that case will cause the image to move by two positions (i.e a 1000px) since one image is 500px.

  timeOut = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000)
}
