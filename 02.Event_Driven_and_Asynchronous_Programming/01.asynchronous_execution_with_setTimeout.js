// function delayLog() {
//   const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   nums.forEach(num => {
//    let delay =  num * 1000;
//    setTimeout(function() {
//     console.log(num);
//    }, delay);
//   });

// }

// delayLog();

// function makeLogger(number) {
//   return function() {
//     console.log(number);
//   }
// }

// function delayLog() {
//   var i;
//   for (i = 1; i <= 10; i += 1) {
//     let logger = makeLogger(i);
//     setTimeout(logger, i * 1000);
//   }
// }

// delayLog();


///////////////


// setTimeout(function() {   // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(function() {   // 2
//   console.log('upon');    // 7
// }, 3000);

// setTimeout(function() {   // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(function() {   // 4
//   console.log('time');    // 8
// }, 4000);


// g, f, d, z, n, s, q,


/////////////////////////

function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}





















