// Example: Sending JSON via XHR

// Sending JSON data to the server is similar to submitting a form. You use the same three steps, with a couple of adjustments:  

// 1. Serialize the data into valid JSON
// 2. Send the request using XMLHttpRequest with a Content-Type: application/json header
// 3. Handle the response

// We'll go through these difference one at a time

// Serializing Data to JSON

// Let's review how to send a basic POST request from JavaScript:
let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');

let data = 'title=Eloquent%20JavaScript&author=Marijn%20Haverbeke';

request.send(data);

//  To send data in JSON format we must uopdate the code to create a valid JSON string.

let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');

let data = {title: 'Eloquent JavaScript', author: 'Marijn Haverbeke'};
let json = JSON.stringify(data);

request.send(json);


///



// Setting the Content-Type header
// The second step is to set the Content-Type request header to application/json, which tells the server to expect JSON data. It's up to the server to do the right thing here, and not all will change their behavior based on the value of this header, but many APIs require that you set this value accurately; it's a good habit.

// let request = new XMLHttpRequest();
// request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');

// request.setRequestHeader('Content-Type', 'application/json');

// let data = { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' };
// let json = JSON.stringify(data);

// request.send(json);



// ///////
// POST /books HTTP/1.1
// Host: ls-230-book-catalog.herokuapp.com
// Content-Type: application/json
// Accept: * / *

// {"title": "Eloquent JavaScript", "author": "Marijn Haverbeke"}




///////////

function createProduct(productData) {
    let json = JSON.stringify(productData);
    let request = new XMLHttpRequest();
    request.open('POST', "https://ls-230-web-store-demo.herokuapp.com/v1/products");
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

    request.addEventListener('load', () => {
        console.log(`This product was added: ${request.responseText}`);
    });

    request.send(json);
}

createProduct({
    name 'HB pencil',
    sku: 'hbp100',
    price: 50,
});





let json = {'name': 'dog', 'sku': '123', 'price': '299'}

