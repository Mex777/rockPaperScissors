function genChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function compare(computer, player) {
    computer = computer.toLowerCase();
    player = player.toLowerCase();

    if (
      (player == 'rock' && computer == 'scissors') || 
      (player == 'scissors' && computer == 'paper') ||
			(player == 'paper' && computer == 'rock')
    ) {
			return 'Congrats you won: ' + player + ' beats ' + computer;
		} else if (player == computer) {
			return 'Tie';
		} else {
			return 'You lost: ' + computer + ' beats ' + player; 
		}
}

for (let i = 0; i < 5; ++i) {
  console.log(compare(genChoice(), prompt("Choice")));
}
