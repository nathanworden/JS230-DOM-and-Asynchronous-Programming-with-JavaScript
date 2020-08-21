// Three steps to submitting a form using JavaScript:

// 1) Serialize the form data
// 2) Send the request using XMLHttpRequest
// 3) Handle the response

/*
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let request = new XMLHttpRequest();
request.open('POST', 'https://example.test/path');

let data = 'this is a test';

request.send(data);
*/




// URL-encoding POST Parameters

/* 
URL encoding also works with POST requests, but you must include a Content-Type header with a value of application/x-www-form-urlencoded when you do. Place the encoded name-value string in the request body. Here we post a new book to a book-catalog demo applicaiton.
*/

let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');
request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

let data = "title=Effective%20JavaScript&author=David%20Herman";

request.addEventListener('load', () => {
    if (request.status === 201) {
        console.log(`This book was added to the catalog: ${request.responseText}`);
    }
});

request.send(data);


/*
Submitting a Form with FormData

URL-encoding the names and values of each input element as we did above is a manual and error-prone process. Modern browsers provide a built-in API to assist in this process, FomrData.
*/
let form = document.getElementById('form');
form.addEventListener('submit', event => {
    event.preventDefault();

    let data = new FormData(form);

    let request = new XMLHttpRequest();
    request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');

    request.addEventListener('load', () => {
        if (request.status === 201) {
            console.log(`This book was added to the catalog: ${request.responseText}`);
        }
    });

    request.send(data);
})