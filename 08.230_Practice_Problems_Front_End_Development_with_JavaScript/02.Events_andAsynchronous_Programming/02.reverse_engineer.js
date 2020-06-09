document.querySelector('html').addEventListener('click', function() {
  document.querySelector('#container').style = 'display: none';
});

document.querySelector('#container').addEventListener('click', function(event) {
  // event.stopPropagation();
}, true);

// What's going on?
// Anytime a user clicks anywhere, the element with id `container` will be hidden
// But if the element with id `container` is clicked on directly... then 'stopPropataion' will happen.