// My Answer

// document.addEventListener('DOMContentLoaded', function() {
//   let allArticles = document.querySelectorAll('article');
//   let main = document.querySelector('main');

//   let unorderedList = document.querySelector('ul');
//   unorderedList.addEventListener('click', function(event) {

//     removeHilightFromOthers();

//     let reference = event.target.getAttribute('href');
//     let article = document.querySelector(reference);
//     article.classList.add('highlight');
//   });

//   allArticles.forEach(article => {
//     article.addEventListener('click', function(event) {
//       removeHilightFromOthers();
//       article.classList.add('highlight');
//     });
//   });

//   function removeHilightFromOthers() {
//     allArticles.forEach(article => {
//       article.classList.remove('highlight');

//     });
//   }

// });


// Book Answer:
//
//
//


function highlight(event) {
  var element;
  var id;

  removeHighlight();

  if (event.target.tagName === 'A') {
    id = event.target.href.match('#article-[0-9]+')[0]
    element = document.querySelector(id);
  } else {
    element = document.querySelector('main');
  }

  element.classList.add('highlight');
}

function removeHighlight() {
  var highlighted = document.querySelector('.highlight');
  if (highlighted) {
    highlighted.classList.remove('highlight');
  }
}

var nav = document.querySelector('header ul');
var main = document.querySelector('main');

nav.addEventListener('click', highlight);
document.addEventListener('click', highlight);
main.addEventListener("click", function(e) {
  e.preventDefault();
  var article = e.target;
  if (article.tagName !== 'ARTICLE') {article = article.parentNode; }

  if (article.tagName === "ARTICLE") {
    e.stopPropagation();
    removeHighlight();
    article.classList.add("highlight");
  }
});





