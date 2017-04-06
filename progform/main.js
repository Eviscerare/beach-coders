$().ready(() => {
  let name, gender, age;
  $('.one form').on('submit', (e) => {
    e.preventDefault();
    name = e.target[0].value;
    $('.one').toggle();
    $('.two').toggle();
  });
  $('.two form').on('submit', (e) => {
    e.preventDefault();
    gender = e.target[0].value;
    $('.two').toggle();
    $('.three').toggle();
  });
  $('.three form').on('submit', (e) => {
    e.preventDefault();
    age = e.target[0].value;
    $('.three').toggle();
    displayData();
  });
  function displayData() {
    // const name = $('#name').value;
    // const gender = $('#gender').value;
    // const age = $('#age').value;
    $('.display').text(name + gender + age);
  }
});

// $().ready(() => {
//   $('form').on('submit', (e) => {
//     e.preventDefault();
//     console.log(e.target);
//   })
// })