/* 
Earlier, we looked at some properties that you can use to traverse DOM nodes such as:

parentNode
childNodes
firstChild
lastChild
nextSibling
previousSibling

These properties often don't give you what you want, thoughl you probably want a list of element nodes without the text and other nodes mixed in. You can simplify your code if you can start with a list of element nodes alone, and you don't have to ignore everything else. Another set of DOM properties provides the functionality you need; you can find them in the element nodes:

children
firstElementChild
lastElementChild
childElementCount
nextElementSibling
previousElementSibling

How do you access the text nodes when using the DOM properties since they don't include non-element nodes. The textContent property provides access to the text.

document.querySelector('a').textContent;

To change the value of that text content, use:

document.querySelector('a').textContent = 'step backward';
*/