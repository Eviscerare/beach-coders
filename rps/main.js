function handleClick(event) {
  const player = +event.target.id;
  const computer = throwHand();

  const winner = determineWinner(player, computer);
  updateDOM(player, computer, winner);
}

function throwHand() {
  return Math.floor(Math.random() * 3);
}

function determineWinner(p1, p2) {
  return p1 === p2
    ? 'tie'
    : p1 + 2 === p2
      ? 'player'
      : p2 + 2 === p1
        ? 'computer'
        : p1 > p2
          ? 'player'
          : 'computer';
}

function updateDOM(player, computer, winner) {
  document.getElementById(player).style.border = '2px solid red';
  document.getElementById('c' + computer).style.border = '2px solid red';

  const loser = winner === 'player' ? 'computer' : 'player';
  if (winner !== 'tie') {
    document.getElementById(winner).textContent = 'Winner Winner Winner';
    document.getElementById(loser).textContent = 'Loser Loser Loser';
  } else {
    document.getElementById('player').textContent = 'Tie Tie Tie';
    document.getElementById('computer').textContent = 'Tie Tie Tie';
  }
}
