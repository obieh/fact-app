const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

//Selcting DOM elements
const btnShare = document.querySelector(".btn-share");
const factForm = document.querySelector(".fact-form");
const factList = document.querySelector(".fact-list");

//Create DOM elements: Render facts in list
factList.innerHTML = "";

//Load data from supabase

fetch("https://qlaezsnuyofisgboncnd.supabase.co", {
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsYWV6c251eW9maXNnYm9uY25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3ODUzMTUsImV4cCI6MjA4NTM2MTMxNX0.jTn86m1fQb9Hy6TmAToSXyOOZSJMdTjWoW384ASS7B8",
  },
});

const htmlArr = initialFacts.map(
  (fact) => `<li class="fact">${fact.text}</li>`,
);
console.log(htmlArr);
const html = htmlArr.join("");
factList.insertAdjacentHTML("afterbegin", html);

//Toggle form visibility
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
