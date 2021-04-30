//array schreiben für teams
const teams = [
  ['Florian', 'Jens', 'Borjan', 'Sabrina'],
  ['Sharine', 'Lukas', 'Sacid', 'Helena'],
  ['Bejan', 'Farah', 'Felix', 'Gabi'],
  ['Oliver N.', 'Oliver G.', 'Vica', 'Matthias'],
];

/* createMember(teams);

function createMember(teams) {
  teams.forEach((team, index) => {
    const main = document.querySelector('main');
    const memberBox = document.createElement('section');
    memberBox.classList.add('memberbox__item', 'memberbox');
    memberBox.innerText = team[0][0];

    console.log(team[0]);
  });
} */

//Funktion für Teams
function createAllTeams(teams) {
  teams.forEach((team) => {
    createTeam(team);
  });
}

createBuddies(teams[0]);
createAllTeams(teams);

function createTeam(team) {
  const main = document.querySelector('main');
  const memberBox = document.createElement('section');
  memberBox.classList.add('memberbox');
  main.appendChild(memberBox);

  const headlineTwo = document.createElement('h2');
  headlineTwo.innerText = 'Your current team:';
  memberBox.appendChild(headlineTwo);

  team.forEach((member, index) => {
    const memberBoxItem = document.createElement('section');
    memberBoxItem.classList.add('memberbox__item');
    memberBoxItem.innerText = member;
    memberBox.appendChild(memberBoxItem);
    if (index === 0) {
      memberBoxItem.classList.add('topitem');
    }
    if (index === team.length - 1) {
      memberBoxItem.classList.add('bottomitem');
    }
  });
}

//Funktion für Buddies

function createBuddies(team) {
  const main = document.querySelector('main');
  const headlineTwo = document.createElement('h2');
  headlineTwo.innerText = 'Your Code Buddy for Today:';
  main.appendChild(headlineTwo);

  const buddyBoxItem = document.createElement('section');
  buddyBoxItem.classList.add('memberbox__pair', 'memberbox');
  main.appendChild(buddyBoxItem);

  const plusSign = document.createElement('img');
  plusSign.classList.add('plus');
  plusSign.setAttribute('src', './images/Plus@2x.png');
  buddyBoxItem.appendChild(plusSign);

  for (let i = 0; i < 2; i++) {
    const memberBoxItem = document.createElement('section');
    memberBoxItem.classList.add(
      'memberbox__item',
      i === 0 ? 'topitem' : 'bottomitem'
    );
    memberBoxItem.innerText = team[i];
    buddyBoxItem.appendChild(memberBoxItem);
  }
}
