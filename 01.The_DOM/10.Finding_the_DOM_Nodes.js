/*
In HTML/JavaScript application, we often need to find an element based on its id attribute. The built-in method getElementById on document provides this behavior.


Problem Group 1
1. Write a JavaScript function that returns the p elements in the DOM represented
*/

// My answer
function walk(node, callback) {
  callback(node);
  for (let idx = 0; idx < node.childNodes.length; idx += 1) {
      walk(node.childNodes[idx], callback);
  }
}

let paragraphs = [];

walk(document.body, node => {
  if (node.tagName === 'P') {
      paragraphs.push(node);
  }
});

paragraphs

// Book answer

function findAllParagraphs() {
  let matches = [];
  let nodes = document.body.childNodes;

  for (let index = 0; index < nodes.length; index += 1) {
    if (nodes[index] instanceof HTMLParagraphElement) {
      matches.push(nodes[index]);
    }
  }

  return matches;
}

console.log(findAllParagraphs());

// 2 Write a JavaScript function that adds the class article-text to every <p> tag in this HTML

// My answer

function walk(node, callback) {
  callback(node);
  for (let idx = 0; idx < node.childNodes.length; idx += 1) {
      walk(node.childNodes[idx], callback);
  }
}

walk(document.body, node => {
  if (node.tagName === 'P') {
      node.classList.add('article-text');
  }
});


// Book Answer

function addClassToParagraphs(node) {
  if (node instanceof HTMLParagraphElement) {
    node.classList.add('article-text');
  }

  let nodes = node.childNodes;
  for (let index = 0; index < nodes.length; index += 1) {
    addClassToParagraphs(nodes[index]);
  }
}

addClassToParagraphs(document.body);


//

function addClassToParagraphs(node) {
  if (node instanceof HTMLParagraphElement) {
    node.classList.add('article-text');
  }

  for (let index = 0; index < node.childNodes.length; index += 1) {
    addClassToParagraphs(node.childNodes[index]);
  }
}


// 3. The solution to the previous problem does everything in one function. It works, but if we need to perform a similar operation later, we must write most of the same code again. We can do better by rethinking the problem.

// You can think of the problem as having two primary operations: find all the p elements, and then add a class to each of them. We can structure our code similarly. This makes the code's intent clearer to other deveopers and increases the reusability of the components.


function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function getElementsByTagName(tagName) {
  let matches = [];

  walk(document.body, node => {
    if (node.nodeName.toLowerCase() === tagName) {
      matches.push(node);
    }
  });

  return matches;
}


getElementsByTagName('p').forEach(paragraph => paragraph.classList.add('article-text'));



///


/* 
Built-In Functions

getElementsByTagName is so useful that the DOM provides a similar method for all elements, and another method that does the same thing for class names:

document.getElementsByTagName(tagName)
document.getElementsByClassName(className)

Both of these return an HTMLCollection or NodeList of matching elements.

Problems Group 2

Update the answer to question 3 of problem group 1 to use the document.getElementsByTagName method.
*/

let paragraphs = document.getElementsByTagName('p');
for (let index = 0; index < paragraphs.length; index += 1) {
  paragraphs[index].classList.add('article-text');
}

//  2. Instead of adding the article-text class to every paragraph on the page, let's restrict it to only the paragraphs inside a <div class="intro"> tag.

let divParagraphs = document.getElementsByClassName('intro');
for (let index = 0; index < divParagraphs.length; index += 1) {
  let ps = divParagraphs[index].getElementsByTagName('p');

  for (let p = 0; p < ps.length; p += 1) {
    ps[p].classList.add('article-text');
  }
}

// You can simplify the above code if you assume that the first element of every <div class="intro"> is a paragraph:

let intros = document.getElementsByClassName('intro');
for (let index = 0; index < intros.length; index += 1) {
  intros[index].firstElementChild.classList.add('article-text');
}

// This simiplification is risky, though. It would break, for example, if you added a heading to one of the intro blocks:

/*
<div id="page1">
  <div class="intro">
    <h2>Page 1</h2>
    <p>The sun is low,</p>
  </div>
  <p>The waters flow,</p>
</div>
<div id="page2">
*/


/*
Selector searches have become so common that web browsers now provide built-in support for selector searches with these two methods:

document.querySelector(selectors)   => Returns first matching element or null

document.querySelectorAll(selector) => Returns NodeList of matching elements

Note that both take multiple css selectors as an argument. The argument is a string of one or more comma-separated css selectors.


Using the selector search methods, we can reqrite our solution from the last problem above:
*/


let paragraphs = document.querySelectorAll('.intro p');
for (let index = 0; index < paragraphs.length; i += 1) {
  paragraphs[index].classList.add('article-text');
}