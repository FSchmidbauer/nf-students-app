import { createBuddies, createTeam, createAllTeams } from "./buddies_n_teams";
// import { teams } from "./teams";

const main = document.querySelector("main");
// // randomize order within a team //
// import { shakeArray } from "./randomize";
// teams[0] = shakeArray(teams[0]);

fetch("https://muc-2020-w1-student-api.vercel.app/api/buddies")
  .then((response) => response.json())
  .then((buddyData) => {
    addHeading2("Your Code Buddy for Today:");
    console.log(buddyData);
    createBuddies(buddyData[0]);
    fetch("https://muc-2020-w1-student-api.vercel.app/api/teams")
      .then((result) => result.json())
      .then((teamData) => {
        addHeading2("Your current team:");
        console.log(teamData);
        createTeam(teamData[0]);
      });
  });

function addHeading2(txt) {
  const heading2 = document.createElement("h2");
  heading2.innerText = txt;
  main.appendChild(heading2);
}
