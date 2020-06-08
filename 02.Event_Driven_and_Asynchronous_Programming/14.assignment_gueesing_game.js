document.addEventListener('DOMContentLoaded', function(event) {
  let answer = Math.floor(Math.random() * 100) + 1;
  var input = document.querySelector('#guess');
  var form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var guess = parseInt(input.value, 10);
    var message;

    if (guess > answer) {
      
    } else if (guess < answer) {

    } else {

    }

    console.log(guess);
  });


});

