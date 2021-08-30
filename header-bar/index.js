const courseList = document.querySelector(".course-list");
console.log(courseList);

const courseWrapper = document.querySelector(".course-wrapper");
console.log(courseWrapper);

const courseListModalWrapper = document.querySelector(
  ".course-list-modal-wrapper"
);
console.log(courseListModalWrapper);

courseWrapper.addEventListener("click", function () {
  console.log("click");
  //  if ([...courseList.classList].includes("active")) {
  //    courseList.classList.remove("active");
  //  } else {
  //    courseList.classList.add("active");
  //  }
  courseList.classList.toggle("active");
  courseListModalWrapper.classList.toggle("active");
});

const walk = document.querySelector("#walk");
console.log(walk);

walk.addEventListener("click", function () {
  console.log("walkclick");
  window.location.href = "/Tession-Math/Walk/index.html";
});

const run = document.querySelector("#run");
console.log(run);

run.addEventListener("click", function () {
  console.log("runclick");
  window.location.href = "/Tession-Math/Run/index.html";
});

const fly = document.querySelector("#fly");
console.log(fly);

fly.addEventListener("click", function () {
  console.log("runclick");
  window.location.href = "/Tession-Math/Fly/index.html";
});
