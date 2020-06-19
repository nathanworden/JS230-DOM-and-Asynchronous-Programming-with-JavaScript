let request = new XMLHttpRequest();
request.open('GET', 'http://api.github.com/repos/rails/rails');

request.addEventListener('load', event => {
  let data = JSON.parse(request.response);

  // do something with data
  console.log(data);
});

request.send()