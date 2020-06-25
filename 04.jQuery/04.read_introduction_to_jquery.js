// When interacting with HTML via the DOM, you sometimes must work around bugs and inconsistencies to get the same outcome across all browsers. Rather than keep all that straight in your head, why not use something that does it for you? That's the primary role of jQuery in modern Web development: it takes a lot of the browser support code and wraps it in universal methods that work with all browsers.

// jQuery is, by far, the most popular JavaScript library available.

// At its core, jQuery is a function that wraps a collection of DOM elements and some convenience methods into an object. You can call the fucntion to select the elements you need to process, and manipulate the object or its elements with methods built into the object.

$(document).ready(function() {
  // DOM loaded and ready, referenced images on img tags are not ready
});

$(window).load(function() {
  // DOM loaded and ready, referenced image on img tags loaded and ready
});

$(function() {
  // DOM is now loaded
});

var $content = jQuery('#content');
var $sameContent = $('#content');

console.log($content.jquery);