// let count = 0;

// var id = setInterval(function() { console.log(count += 1); }, 200);

var counterId;

function startCounting() {
  let num = 0;
  counterId = setInterval(function() {
    console.log(num += 1);
  }, 200);
}

function stopCounting() {
  clearInterval(counterId);
}


var id = startCounting();

stopCounting(id);