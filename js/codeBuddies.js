import drawDate from "./timeStamp";

const header = document.querySelector("header");
const currentDate = document.createElement("h3");
currentDate.innerText = drawDate();
header.appendChild(currentDate);

import { createBuddies, createTeam } from "./buddies_n_teams";
import { teams } from "./teams";

for (let i = 0; i < 4; i++) {
  const teamA = [teams[i][0], teams[i][1]];
  const teamB = [teams[i][2], teams[i][3]];

  createBuddies(teamA);
  createBuddies(teamB);
}
