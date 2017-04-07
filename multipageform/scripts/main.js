$().ready(() => {
  $('.start').on('click', start);
  $('.second').on('submit', finish);

  var name, food;

  function start() {
    $(this).toggle();
    $('.first').toggle();
  }

  function finish(e) {
    e.preventDefault();
    $(this).toggle();
    const url = document.URL;
    const name = url.split('?')[1].split('=')[1];
    const food = e.target[0].value;
    displayResult(name, food);
  }

  function displayResult(name, food) {
    $('.result').text(`Okay so your name is ${name} and your favorite food is ${food}.`).toggle();
  }
});
