const problem01_1 = document.querySelector("#problem01-1");
const submit01_1 = document.querySelector("#submit01-1");
const info01_1 = document.querySelector("#info01-1");

const problem01_2 = document.querySelector("#problem01-2");
const submit01_2 = document.querySelector("#submit01-2");
const info01_2 = document.querySelector("#info01-2");

const problem02_1_1 = document.querySelector("#problem02-1-1");
const problem02_1_2 = document.querySelector("#problem02-1-2");
const submit02_1 = document.querySelector("#submit02-1");
const info02_1 = document.querySelector("#info02-1");

const problem02_2_1 = document.querySelector("#problem02-2-1");
const problem02_2_2 = document.querySelector("#problem02-2-2");
const submit02_2 = document.querySelector("#submit02-2");
const info02_2 = document.querySelector("#info02-2");

const videoButton = document.querySelector(".video-button");

const youtubeVideo = document.querySelector(".youtube-video");

submit01_1.addEventListener("click", function () {
  if (problem01_1.value === "30") {
    info01_1.innerText = "correct";
    info01_1.style.color = "green";
  } else {
    info01_1.innerText = "try again";
    info01_1.style.color = "red";
  }
});

submit01_2.addEventListener("click", function () {
  if (problem01_2.value === "30") {
    info01_2.innerText = "correct";
    info01_2.style.color = "green";
  } else {
    info01_2.innerText = "try again";
    info01_2.style.color = "red";
  }
});

submit02_1.addEventListener("click", function () {
  if (problem02_1_1.value === "30" && problem02_1_2.value === "30") {
    info02_1.innerText = "correct";
    info02_1.style.color = "green";
  } else {
    info02_1.innerText = "try again";
    info02_1.style.color = "red";
  }
});

submit02_2.addEventListener("click", function () {
  if (problem02_2_1.value === "30" && problem02_2_2.value === "30") {
    info02_2.innerText = "correct";
    info02_2.style.color = "green";
  } else {
    info02_2.innerText = "try again";
    info02_2.style.color = "red";
  }
});
videoButton.addEventListener("click", function () {
  youtubeVideo.classList.toggle("active");
});
