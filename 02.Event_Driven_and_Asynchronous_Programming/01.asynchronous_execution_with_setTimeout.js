// sequential code is when the next line of code must wait until the current line completes.

// First-class functions mean we can write and use functions that accept or return functions, such as the methods provided by array objects.

// function logger(object) {
//   console.log(object);
// }

// let numbers = [3, 7, 25, 39];
// numbers.forEach(logger);
// console.log(numbers.length);

// its possible to write code that runs partly now, then pauses and continues to run later after a delay of milliseconds, minutes, hours, or even days. We call such code asynchronouse code; it doesn't run continuously or even when the runtime encounters it. 

// setTimeout is a function that takes two arguments: a callback funtion and a time to wait specified in milliseconds (1/1000th of a second). It sets a timer that waits until the given time delay elapses, then invokes the callback function:

// setTimeout(() => {
//   console.log('!');
// }, 3000);

// setTimeout(() => {
//   console.log('World');
// }, 1000);

// console.log('Hello');

//  Ultimatley, working with asynchronous code means you must reason about both what the code does and when it does it. 


// 1)
// function delayLog() {
//   let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   nums.forEach(num => {
//    setTimeout(() => {
//      console.log(num);
//    }, 1000 * num); 
//   });
// }

// //Another way to do it:
// function makeLogger(number) {
//   return function() {
//     console.log(number);
//   }
// }

// function delayLog() {
//   for (let index = 1; index <= 10; index += 1) {
//     let logger = makeLogger(index);
//     setTimeout(logger, index * 1000);
//   }
// }


// setTimeout(() => {        // 1
//   console.log('Once');    // 5
// }, 1000);                 

// setTimeout(() => {        // 2
//   console.log('upon');    // 7
// }, 3000);                 

// setTimeout(() => {        // 3
//   console.log('a');       // 6  
// }, 2000);                 

// setTimeout(() => {        // 4
//   console.log('time');    // 8
// }, 4000);                 



// setTimeout(() => {        // 1
//   setTimeout(() => {      // 6
//     q();                  // 12
//   }, 15);

//   d();                    // 7

//   setTimeout(() => {      // 8
//     n();                  // 10
//   }, 5);

//   z();                   // 9
// }, 10);

// setTimeout(() => {        // 2
//   s();                    // 11
// }, 20);               

// setTimeout(() => {        // 3
//   f();                    // 4
// });

// g();                      // 5


// g
// f
// d
// z
// n
// s
// q

function afterNSeconds(callback, duration) {
  setTimeout(() => {
    callback();
  }, 1000 * duration);
}