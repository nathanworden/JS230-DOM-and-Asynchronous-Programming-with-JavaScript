let request = new HTMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.responseType = 'json';

request.addEventListener('load', event => {
  let data = request.response;

});

request.send();