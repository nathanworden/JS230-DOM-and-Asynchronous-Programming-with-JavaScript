// SetInterval is like setTimeout, but instead of invoking the callback once, it invokes it again and again at intervals until told to stop.

// setInterval returns an identifer that we can later pass to clearInterval to cancel the timer and stop the repeated execution of the callback. setInterval is useful when you must run some code at regular intervals. For instance, perhaps you need to auto-save a user's work in a large web form:

// function save() {
//   // Send the form values to the server for safe keeping
// }

// // Call save() ever 10 seconds
// let id = setInverval(save, 10000);

// // Later, perhaps after the user submits the form
// clearInterval(id);
let counterId;

function startCounting(num) {
  let count = 0;
  let counterId = setInterval(() => {
    count += 1;
    console.log(count);
  }, 500)
}

startCounting(1);

function stopCounting() {
  clearInterval(counterId);
}




// let num = 1;
// function startCounting() {
//   console.log(num)
//   num += 1;
// }

// setInterval(startCounting, 500);