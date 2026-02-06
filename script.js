const btnShare = document.querySelector(".btn-share");
const factForm = document.querySelector(".fact-form");

btnShare.addEventListener("click", function () {
  factForm.classList.toggle("hidden");
  btnShare.textContent = factForm.classList.contains("hidden")
    ? "Share a fact"
    : "Close";
});
