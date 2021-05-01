import { createBuddies, createAllTeams } from "./buddies_n_teams";
import { teams } from "./teams";

createAllTeams(teams);

const main = document.querySelector("main");
main.classList.add("mt-2");
