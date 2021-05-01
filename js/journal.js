import drawDate from "./timeStamp";

const header = document.querySelector("header");
const currentDate = document.createElement("h3");
currentDate.classList.add("mt-025");

currentDate.innerText = drawDate();

header.appendChild(currentDate);

const main = document.querySelector("main");
main.classList.add("mt-2");
