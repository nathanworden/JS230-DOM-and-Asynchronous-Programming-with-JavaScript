// Network Programming in JavaScript

//  - Request Response cycle can become a limiting factor as applications become more interactive and their interfaces more complex.

// Developers need a way to replace only part of the page.

// That new technique is AJAX:
// Asynchronous JavaScript And XML.

// AJAX gained popularity for its ability to fetch data, typically HTML or XML, and update parts of a page.

// When you hear someone mention an "AJAX request" or "via AJAX" they refer to an HTTP request from a web browser that does not perform a full page load.

// There are two things worth noting about how this interaction differs from the page-navigation example.
 // - The web browser doesn't make an automatic HTTP request; instead, JavaScript code initiates it, typically from an event listener.
 // - When the browser receives a response, JavaScript code takes the respons's body and updates the page as needed.


// To summarize: when requesting a resource using JavaScript, the developer must write code that initates the request and handles the response.




// AJAX is Asynchronous JavaScript and XML
// WHen you hear someone mention "an AJAX request" they are refering to an HTTP request from a web browser that does not perform a full page load.