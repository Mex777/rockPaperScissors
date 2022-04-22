const genChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
};

const compare = (computer, player) => {
  computer = computer.toLowerCase();
  player = player.toLowerCase();

  if (
    (player == 'rock' && computer == 'scissors') ||
    (player == 'scissors' && computer == 'paper') ||
    (player == 'paper' && computer == 'rock')
  ) {
    return [1, 'Congrats you won: ' + player + ' beats ' + computer, 0];
  } else if (player == computer) {
    return [0, 'Tie', 0];
  } else {
    return [0, 'You lost: ' + computer + ' beats ' + player, 1];
  }
};

const scoreEl = document.querySelector('#score');
let scoreComputer = 0;
let scorePlayer = 0;
const answer = document.querySelector('#answer');

const rock = document.createElement('button');
rock.addEventListener('click', () => {
  const winner = compare('rock', genChoice());
  scorePlayer += winner[0];
  scoreComputer += winner[2];
  answer.textContent = winner[1];
  scoreEl.textContent = 'Score: ' + scorePlayer + '-' + scoreComputer;
  if (scorePlayer === 5 || scoreComputer === 5) {
    endGame();
  }
});
rock.textContent = 'rock';

const paper = document.createElement('button');
paper.addEventListener('click', () => {
  const winner = compare('rock', genChoice());
  scorePlayer += winner[0];
  scoreComputer += winner[2];
  answer.textContent = winner[1];
  scoreEl.textContent = 'Score: ' + scorePlayer + '-' + scoreComputer;
  if (scorePlayer === 5 || scoreComputer === 5) {
    endGame();
  }
});
paper.textContent = 'paper';

const scissors = document.createElement('button');
scissors.addEventListener('click', () => {
  const winner = compare('rock', genChoice());
  scorePlayer += winner[0];
  scoreComputer += winner[2];
  answer.textContent = winner[1];
  scoreEl.textContent = 'Score: ' + scorePlayer + '-' + scoreComputer;
  if (scorePlayer === 5 || scoreComputer === 5) {
    endGame();
  }
});
scissors.textContent = 'scissors';

const buttons = document.querySelector('#buttons');
buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors);

const endGame = () => {
  const children = buttons.childNodes;
  Array.from(children).forEach((node) => buttons.removeChild(node));
  scoreEl.innerHTML = '';
  answer.textContent = 'Game finished. ';
  if (scoreComputer === 5) {
    answer.textContent += 'Computer won.';
  } else {
    answer.textContent += 'You won.';
  }
};
