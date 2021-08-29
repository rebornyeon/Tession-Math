const answerSelect = document.querySelector(".answer-select");
console.log(answerSelect);

const answerSubmit = document.querySelector(".answer-submit");
console.log(answerSubmit);

const answerInfo = document.querySelector(".answer-info");
console.log(answerInfo);

answerSubmit.addEventListener("click", function () {
  console.log("click");
  if (answerSelect.value === "30") {
    answerInfo.innerText = "correct";
    answerInfo.style.color = "green";
  } else {
    answerInfo.innerText = "try again";
    answerInfo.style.color = "red";
  }
});
