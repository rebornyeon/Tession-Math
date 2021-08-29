const answerInput = document.querySelector(".answer-input");

const answerSubmit = document.querySelector(".answer-submit");

const answerInfo = document.querySelector(".answer-info");

const videoButton = document.querySelector(".video-button");

const youtubeVideo = document.querySelector(".youtube-video");

answerSubmit.addEventListener("click", function () {
  if (answerInput.value === "30") {
    answerInfo.innerText = "correct";
    answerInfo.style.color = "green";
  } else {
    answerInfo.innerText = "try again";
    answerInfo.style.color = "red";
  }
});
videoButton.addEventListener("click", function () {
  youtubeVideo.classList.toggle("active");
});
