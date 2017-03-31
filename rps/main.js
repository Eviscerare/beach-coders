function throwHand() {
  return Math.floor(Math.random() * 3);
}

function handleClick(event) {
  const playerThrow = event.target.textContent;
  console.log('Player threw a ' + playerThrow);
  const computerThrow = throwHand();
  if (computerThrow === 1) {
    console.log('AI threw a Rock');
    if (playerThrow === 'Rock') {
      console.log('Tie');
    } else if (playerThrow === 'Paper') {
      console.log('Player wins');
    } else {
      console.log('AI wins');
    }
  } else if (computerThrow === 2) {
    console.log('AI threw a Paper');
    if (playerThrow === 'Rock') {
      console.log('AI wins');
    } else if (playerThrow === 'Paper') {
      console.log('Tie');
    } else {
      console.log('Player wins');
    }
  } else {
    console.log('AI threw a Scissors');
    if (playerThrow === 'Rock') {
      console.log('Player wins');
    } else if (playerThrow === 'Paper') {
      console.log('AI wins');
    } else {
      console.log('Tie');
    }
  }
}