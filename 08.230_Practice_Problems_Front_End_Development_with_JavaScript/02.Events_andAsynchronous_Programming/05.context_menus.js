var main = document.querySelector('main');
var sub = document.querySelector('#sub');

main.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  alert('Main');
});

sub.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  event.stopPropagation();
  alert('Sub');
});