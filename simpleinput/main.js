function updateText(event) {
  if (event.keyCode === 13) {
    const input = document.getElementById('input');
    const display = document.getElementById('display');
    display.innerHTML = input.value;
  }
}
