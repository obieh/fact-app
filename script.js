const btnShare = document.querySelector(".btn-share");
const factForm = document.querySelector(".fact-form");

btnShare.addEventListener("click", function () {
  factForm.classList.toggle("hidden");
  btnShare.textContent = factForm.classList.contains("hidden")
    ? "Share a fact"
    : "Close";
});

let votesInteresting = document.querySelector(".vote-btn--interesting");
let votesMindblowing = document.querySelector(".vote-btn--mindblowing");
let votesFalse = document.querySelector(".vote-btn--false");

votesInteresting.addEventListener("click", function () {
  console.log("Interesting");
});

votesMindblowing.addEventListener("click", function () {
  console.log("Mind-blowing");
});

votesFalse.addEventListener("click", function () {
  console.log("False");
});
