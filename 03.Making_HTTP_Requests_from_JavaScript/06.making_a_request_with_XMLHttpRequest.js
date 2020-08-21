var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// let request = new XMLHttpRequest() // Instantiate new XMLHttpRequest object
// request.open('GET', '/path');      // Set HTTP method and URL on request
// request.send();                    // Send request

// console.log(request.responseText);
// console.log(request.status);
// console.log(request.statusText);

// request.addEventListener('load', event => {
//     var request = event.target;           // the XMLHttpRequest object

//     request.responseText;                 // body of response
//     request.status;                       // status code
//     request.statusText;                   // status text from response

//     request.getResponseHeader('Content-Type'); // response header

//     request.readyState;                    
// })


// An Overview of XMLHttpRequest Methods

// You should become familiar with how to use the following XMLHttpRequest methods:

// Method:

// open(method, url);
// send(data)
// setRequestHeader(header, value)
// abort()
// getResponseHeader(header);

// You should also become familiar with the following XMLHttpRequest properties:

// timeout
// readyState
// responseText
// response



// Debuggin XMLHttpRequests in Chorme



let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.send();
request.addEventListener('load', event => {
    var request = event.target;

    return request.responseText;
});
