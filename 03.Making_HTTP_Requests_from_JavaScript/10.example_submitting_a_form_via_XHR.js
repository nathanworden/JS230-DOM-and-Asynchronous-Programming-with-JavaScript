// let request = new XMLHttpRequest();
// request.open('POST', 'https://example.test/path');

// let data = 'this is a test';

// request.sendn(data);

// Or if there was no dat to send
// request.send();


/////

// URL-encoding POST Parameters
// URL encoding also works with `POST` requets, but you must include a `Content-Type` header with a value of `application/x-www-form-urlencoded` when you do. Place the encoded name-value string in the request body. Here we post a new book to a book-catelog demo application.

let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');

request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

let data = 'title=Effective%20JavaScript&author=David%20Herman';

request.addEventListener('load', () => {
  if (request.status === 201) {
    console.log(`This book was added to the catalog: ${request.responseText}`);
  }
});

request.send(data);

// A 201 status means the resource was added successfully on the server, although our book-catalog application doesn't actually store the data. This code produces the following HTTP request:

POST /books HTTP/1.1
Host: ls-230-book-catalog.herokuapp.com
Content-Length: 50
Content-type: application/x-www-form-urlencoded
Accept: */ *

title=Effective%20JavaScript&author=David%20Herman

/////////
//The server parses the data in the HTTP request's body and makes it available in the following data structure:
{
  title: 'Effective JavaScript',
  author: 'David Herman'
}


//
// The example data structure assumes that the data is already in a valid URL-safe format. Most of the time, though, you need to construct this data on the fly based on the state of the program or, more often, the values entered by a user in an HTML form. We'll learn how to handle that situation next.

// Submitting a Form
// Let's assume we are working with a web page that contains the following form:

// <form id="form">
//   <p><label>Title: <input type="text" name="title"></label></p>
//   <p><label>Author: <input type="text" name="author"></label></p>
//   <p><button type="submit">Submit</button></p>
// </form>

// To access the values from this form, we can use the HTMLFormElement.elements property within an event listener that fires when the user submits the form:

let form = document.getElementById('form');

// Bind to the form's submit event to handle the submit button being clicked, enter being pressed within a input, etc.
for.addEventListener('submit', event => {
  //prevent the browser from submitting the form
  event.preventDefault();

  // access the inputs using form.elements and serialize into a string
  let keysAndValues = [];

  for (let index = 0; index < form.elements.length; index += 1) {
    let element = form.elements[i];
    let key;
    let value;

    if (element.type != 'submit') {
      key = encodeURIComponent(element.name);
      value = encodeURIComponent(element.value);
      keysAndValues.push(`${key}=${value}`);
    }
  }

  let data = keysAndValues.join('&');

  // submit the data
  let request = new XMLHttpRequest();
  request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.addEventListener('load', () => {
    if (request.status === 201) {
      console.log(`This book was added to the catalog: ${request.responseText}`;
    }
  });

  request.send(data);
});


//////////////////////////////////
When this code runs, it sends a request that is identical to the one we sent in the previous example:

POST /books HTTP/1.1
Host: ls-230-book-catalog.herokuapp.com
Content-Length: 13
Content-type: application/x-www-form-urlencoded
Accept: */ *

title=Effective%20JavaScript&author=David%20Herman

////////////////

// Submitting a Form with FormData
// URL-encoding the names and values of each input element as we did above is a manual and error-prone process. Modern browsers provide a built-in API to assist in this process, FormData. Here's how to use it:

// Please take note that FormData only uses input fields that have a name attribute.


let form = document.getElementById('form');

form.addEventListener('submit', event {
  // prevent the browser from submitting the form
  event.preventDefault();

  let data = new FormData(form);

  let request = new XMLHttpRequest();
  request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');

  request.addEventListener('load', () => {
    if (request.status === 201) {
      console.log(`This book was added to the catalog: ${request.responseText}`);
    }
  })

  request.send(data);
})




























