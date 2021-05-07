const localJournalCard = loadFromLocalStorage() || {};
console.log(localJournalCard);

const starsSection = document.querySelector(".form__stars");

for (let i = 0; i < 5; i++) {
  const starSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const starPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  starsSection.appendChild(starSVG);
  starSVG.appendChild(starPath);
  starSVG.setAttribute("fill", "none");
  starSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  starSVG.setAttribute("viewBox", "-2 -2 28 28");
  starPath.setAttribute("fill-rule", "evenodd");
  starPath.setAttribute("stroke", "#7589A2");
  starPath.setAttribute(
    "d",
    "M8.2 7.2L.8 8.3h0C0 8.5-.3 9.4.2 10l5.4 5.2-1.3 7.4v.1a1 1 0 001.4 1l6.6-3.6 6.6 3.5h.1a1 1 0 001.3-1l-1.2-7.4 5.3-5.2h.1a1 1 0 00-.6-1.6l-7.4-1L13.3.4a1 1 0 00-1.8 0L8.2 7.2z"
  );
}
const stars = starsSection.querySelectorAll("svg");

makeRateable(stars, "filled__stars", localJournalCard.rating);

//rectangles
const rectanglesSection = document.querySelector(".form__rectangles");

for (let i = 0; i < 10; i++) {
  const rectangleSVG = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  const rectangleRect = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );
  rectanglesSection.appendChild(rectangleSVG);
  rectangleSVG.appendChild(rectangleRect);
  rectangleSVG.setAttribute("fill", "none");
  rectangleSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  rectangleSVG.setAttribute("viewBox", "-2 -2 25 25");
  rectangleRect.setAttribute("transform", "rotate(-90 -56.5 98.5)");
  rectangleRect.setAttribute("x", "20");
  rectangleRect.setAttribute("y", "155");
  rectangleRect.setAttribute("width", "22");
  rectangleRect.setAttribute("height", "22");
  rectangleRect.setAttribute("rx", "4");
  rectangleRect.setAttribute("stroke", "#7589A2");
  rectangleRect.setAttribute("fill-rule", "evenodd");
}

const rectangles = rectanglesSection.querySelectorAll("svg");
makeRateable(rectangles, "filled__rectangles", localJournalCard.comprehension);

function makeRateable(svgs, shape, rating = 0) {
  svgs.forEach((svg, index) => {
    for (let j = 0; j < rating; j++) {
      svgs[j].classList.add(shape);
    }
    svg.addEventListener("click", () => {
      for (let i = 0; i <= index; i++) {
        svgs[i].classList.add(shape);
      }
      for (let i = index + 1; i < svgs.length; i++) {
        svgs[i].classList.remove(shape);
      }
    });
  });
}

const entries = loadFromLocalStorage() || {};
const form = document.querySelector(".form");

const inputMotto = document.querySelector("[name = input__motto]");
inputMotto.innerText = localJournalCard.motto || "";

const inputNotes = document.querySelector("[name = input__notes]");
inputNotes.innerText = localJournalCard.notes || "";

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const filledStars = document.querySelectorAll(".filled__stars");
  entries.rating = filledStars.length;
  const filledRectangles = document.querySelectorAll(".filled__rectangles");
  entries.comprehension = filledRectangles.length;
  const inputMotto = document.querySelector("[name = input__motto]");
  entries.motto = inputMotto.value;
  const inputNotes = document.querySelector("[name = input__notes]");
  entries.notes = inputNotes.value;
  localStorage.setItem("Journalcard", JSON.stringify(entries));
  form.reset();
  const makeEmptyShapes = document.querySelectorAll(
    ".filled__stars, .filled__rectangles"
  );
  makeEmptyShapes.forEach((shape) => {
    shape.classList.remove("filled__stars", "filled__rectangles");
  });
  /*postJournalEntry(entries);*/
});

function postJournalEntry(entry) {
  fetch("https://muc-2020-w1-student-api.vercel.app/api/journals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  })
    .then((res) => res.json())
    .then((entries) => console.log(entries));
}

function loadFromLocalStorage() {
  const JournalCard = JSON.parse(localStorage.getItem("Journalcard"));
  return JournalCard;
}
