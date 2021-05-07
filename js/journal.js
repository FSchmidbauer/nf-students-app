import drawDate from "./timeStamp";

fetch("https://muc-2020-w1-student-api.vercel.app/api/journals")
  .then((result) => result.json())
  .then((journalData) => {
    console.log(journalData);
    journalData.forEach((journalItem) => {
      createJournalCardBox(journalItem);
    });
  });

function createJournalCardBox(journalItem) {
  const journal = document.querySelector(".journal");
  const journalCardBox = document.createElement("section");
  journalCardBox.classList.add("journalcardbox");
  journalCardBox.id = journalItem.id;
  journal.appendChild(journalCardBox);
  createJournalCard(journalItem, journalCardBox);
}

function createJournalCard(card, journalCardBox) {
  const journalCardBody = document.createElement("section");
  journalCardBody.classList.add("journalcard", "rounded", "shadow-grey");
  journalCardBox.appendChild(journalCardBody);

  const headlineTwo = document.createElement("h2");
  headlineTwo.classList.add("journalcard__day");
  headlineTwo.innerText = "YESTERDAY";
  journalCardBody.appendChild(headlineTwo);

  Object.keys(card).forEach((key, index) => {
    if (index !== 0) {
      const headlineThree = document.createElement("h3");
      headlineThree.innerText = key.toUpperCase();
      journalCardBody.appendChild(headlineThree);

      const section = document.createElement("section");
      section.classList.add(key);
      journalCardBody.appendChild(section);
    }
  });
  const starBox = journalCardBox.querySelector(".rating");
  starBox.classList.add("journalcard__stars");

  for (let i = 0; i <= 4; i++) {
    const starImage = document.createElement("img");
    starImage.src = "./images/Star.png";
    starImage.classList.add("journalcard__star");
    starBox.appendChild(starImage);
    if (i >= card.rating) {
      starImage.classList.add("disabled");
    }
  }
  const rectangleBox = journalCardBox.querySelector(".comprehension");
  rectangleBox.classList.add("journalcard__rectangles");

  for (let i = 0; i <= 9; i++) {
    const rectangleImage = document.createElement("img");
    rectangleImage.src = "./images/Rectangle.png";
    rectangleImage.classList.add("journalcard__rectangle");
    rectangleBox.appendChild(rectangleImage);
    if (i >= card.comprehension) {
      rectangleImage.classList.add("disabled");
    }
  }
  const mottoBox = journalCardBox.querySelector(".motto");
  mottoBox.classList.add("journalcard__motto");
  mottoBox.innerText = `"${card.motto}"`;

  const notesBox = journalCardBox.querySelector(".notes");
  notesBox.classList.add("journalcard__notes");
  notesBox.innerText = `"${card.notes}"`;
}

const header = document.querySelector("header");
const currentDate = document.createElement("h3");
currentDate.classList.add("mt-025");

currentDate.innerText = drawDate();

header.appendChild(currentDate);

const main = document.querySelector("main");
main.classList.add("mt-2");
