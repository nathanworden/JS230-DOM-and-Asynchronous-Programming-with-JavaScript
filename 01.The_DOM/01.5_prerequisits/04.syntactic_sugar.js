
//
// Concise Property Initializers
//

// function xyzzy(foo, bar, qux) {
//     return {
//         foo: foo,
//         bar: bar,
//         qux, qux,
//     };
// }

// Same thing but a more concise syntax:
// JavaScript looks for a variable with the same name to use as the inital value.
// function xyzzy(foo, bar, qux) {
//     return {
//         foo,
//         bar,
//         qux,
//     };
// }

// let example = xyzzy('dog', 'cat', 'norman');
// console.log(example);


//
// Concise Methods
//

// let obj = {
//     foo: function() {
//         // do something
//     },

//     bar: function(arg1, arg2) {
//         // do something else with arg1 and arg2
//     },
// }

// The new concise method shorthand lets you eliminate the : and the word 'function'

// let obj = {
//     foo() {
//         // do something
//     },

//     bar(arg1, arg2) {
//         // do something else with arg1 and arg2
//     }
// }

// console.log(obj)


//
// Object Destructuring
//

// Destructuring is a shorthand syntax that lets you peform multiple assignments in a single expression. For example:

// let obj = {
//     foo: "foo",
//     bar: "bar",
//     qux: 42,
// };

// // let foo = obj.foo;
// // let bar = obj.bar;
// // let qux = obj.qux;

// let {foo, bar, qux} = obj;

// console.log(foo)
// console.log(bar)
// console.log(qux)


// destructruring also works with function parameters:

// function xyzzy({ foo, bar, qux }) {
//     console.log(qux);
//     console.log(bar);
//     console.log(foo);
// }

// let obj = {
//     foo: 1,
//     bar: 2,
//     qux: 3,
// };

// xyzzy(obj);

// ({ foo, bar, qux } = obj);

//
// Array Destructuring
//

// let foo = [1, 2, ,3];
// let [first, second, third ] = foo;

// console.log(first);
// console.log(second);
// console.log(third);

// If you don't need all of the elements, you can skip them:

// let bar = [1, 2, 3, 4, 5, 6, 7];
// let [first, , , fourth, fifth, , seventh ] = bar;
// console.log(fourth);


//
///
//

// Array destructing lets you perform multiple assignments in a single expression:

// let one = 1; 
// let two = 2;
// let three = 3;

// let [ num1, num2, num3 ] = [one, two, three];

// console.log(num1);
// console.log(num2);
// console.log(num3);

// This syntax is handy when you need to sqap the values in two variables:

// let one = 1; 
// let two = 2;

// [one, two] = [two, one];

// console.log(one);
// console.log(two);

// Finally, you can use rest syntax (discussed below) in array destructuring to assign a variable to the rest of an array:

// let foo = [1, 2, 3, 4];
// let [bar, ...qux ] = foo;
// console.log(bar);
// console.log(qux);

//
// Spread Syntax
//


// The spread syntax uses ... to "spread" the elements of an array or object into separate items. Consider this code:

// function add3(item1, item2, item3) {
//     return item1 + item2 + item3;
// }

// let foo = [3, 7, 11];
// console.log(add3(foo[0], foo[1], foo[2]));


//
// Rest Syntax
//

//  You can think of rest syntax as the opposite of spread syntax. Instead of spreading an array or object out into separate items, it instead collects multiple items into an array or object. We saw an example of this in the section on destructuring arrays:

let foo = [1, 2, 3, 4];
let [bar, ...otherStuff ] = foo;
console.log(bar); //1
console.log(otherStuff); // [2, 3, 4]