let request = new XMLHttpRequest();

request.addEventListener('load', event => {
  let xhr = event.target;
});



// Keep in mind that the browser considers any request that receives a complete response as successful, even if the response has a non-200 status code or represents an application error. Whether load or another event fires is determined by wheter the HTTP request-response cycle loads a complete response. It does not consider the response's semantic meaning to the application.