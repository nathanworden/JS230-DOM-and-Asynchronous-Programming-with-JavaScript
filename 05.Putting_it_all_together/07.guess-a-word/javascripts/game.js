$(function() {
  var randomWord = function() {
    let words = ['apple', 'banana', 'orange', 'pear'];

    return function() {
      let idx = Math.floor(Math.random() * words.length);
      return words.splice(idx, 1)[0];
    }
  }();

  let Game = {
    winningWord: randomWord(),
    incorrectGuesses: 0,
    lettersGuessed: [],
    totalAllowedWrongGuesses: 6,
  }

  $('#replay').on('click', function() {
    console.log(Object.create(Game));
  })
});



