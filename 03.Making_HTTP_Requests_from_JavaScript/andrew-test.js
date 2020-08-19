

function catAPICall(endpoint) {
    let request = new XMLHttpRequest();

    request.open('get', 'https://api.thecatapi.com/v1/' + endpoint );
    request.responseType = 'json';
    request.setRequestHeader("x-api-key", "f8a3ea08-e7bf-404b-a50d-61de893f9675")

    request.addEventListener('load', event => {
        console.log('load');
      console.log(request.response);
      return request.response;
    });

    request.addEventListener('abort', event => {
        console.log(error);
        console.log('abort');
    });

    request.send();
}



catAPICall('categories');
catAPICall('images/search&category_ids=1');