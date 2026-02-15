const btnShare = document.querySelector(".btn-share");
const factForm = document.querySelector(".fact-form");
const factList = document.querySelector(".fact-list");

factList.innerHTML = "";
console.log(btnShare);

btnShare.addEventListener("click", function () {
  factForm.classList.toggle("hidden");
  btnShare.textContent = factForm.classList.contains("hidden")
    ? "Share a fact"
    : "Close";
});
/*
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

const fact = [
  "lisbon is the capital of portugal",
  "the sky is blue",
  "the earth is flat",
];
console.log(fact);
const [text, tim, vim] = fact;
console.log(text, tim, vim);
console.log(fact[0], fact[1], fact[2]);

const neefact = [...fact, "the moon is made of cheese"];
console.log(neefact);

const neefact1 = ["the moon is made of cheese", ...fact];
console.log(neefact1);

const factObj = {
  text1: "lisbon is the capital of portugal",
  source: "https://en.wikipedia.org/wiki/Lisbon",
  category: "society",
  createSummary: function () {
    return `The data '${this.text1}' can be verified from (${this.source})`;
  },
};
console.log(factObj.text1);

const { text1, source, category } = factObj;
console.log(text1, source);
console.log(factObj.createSummary());

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCate = CATEGORIES.map((cat) => {
  return cat.name;
});
console.log(allCate);

const allColors = CATEGORIES.map((el) => {
  return el.color;
});
console.log(allColors);

const allCateColor = CATEGORIES.map(function (cat) {
  return { name: cat.name, color: cat.color };
});
console.log(allCateColor);

const allCateColor1 = CATEGORIES.map(function (cat) {
  return { name: cat.name, color: cat.color };
});
console.log(allCateColor1);

const allNames = CATEGORIES.map((el) => {
  return el.name;
}).filter((name) => name.includes("ty"));
console.log(allNames);
*/
