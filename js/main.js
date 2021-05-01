import { createBuddies, createTeam, createAllTeams } from "./buddies_n_teams";
import { teams } from "./teams";

const main = document.querySelector("main");

addHeading2("Your Code Buddy for Today:");

createBuddies(teams[0]);

addHeading2("Your current team:");

createTeam(teams[0]);

function addHeading2(txt) {
  const heading2 = document.createElement("h2");
  heading2.innerText = txt;
  main.appendChild(heading2);
}
