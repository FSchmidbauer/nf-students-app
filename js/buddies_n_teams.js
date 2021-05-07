//Funktion für Buddies

export function createBuddies(team) {
  const main = document.querySelector("main");

  const buddyBoxItem = document.createElement("section");
  buddyBoxItem.classList.add("memberbox__pair", "memberbox");
  main.appendChild(buddyBoxItem);

  const plusSign = document.createElement("img");
  plusSign.classList.add("plus");
  plusSign.setAttribute("src", "./images/Plus@2x.png");
  buddyBoxItem.appendChild(plusSign);

  for (let i = 0; i < 2; i++) {
    const memberBoxItem = document.createElement("section");
    memberBoxItem.classList.add(
      "memberbox__item",
      i === 0 ? "topitem" : "bottomitem"
    );
    memberBoxItem.innerText = team[i];
    buddyBoxItem.appendChild(memberBoxItem);
  }
}

export function createTeam(team) {
  const main = document.querySelector("main");
  const memberBox = document.createElement("section");
  memberBox.classList.add("memberbox");
  main.appendChild(memberBox);

  team.forEach((member, index) => {
    const memberBoxItem = document.createElement("section");
    memberBoxItem.classList.add("memberbox__item");
    memberBoxItem.innerText = member;
    memberBox.appendChild(memberBoxItem);
    if (index === 0) {
      memberBoxItem.classList.add("topitem");
    }
    if (index === team.length - 1) {
      memberBoxItem.classList.add("bottomitem");
    }
  });
}

export function createAllTeams(teams) {
  teams.forEach((team) => {
    createTeam(team);
  });
}
