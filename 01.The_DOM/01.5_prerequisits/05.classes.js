

/*
Classes

The ES6 standard added the class keyword to javaScript. In effect, classes act like syntactic sugar -- syntax designed to be easier to read or use -- that makes it easier for programmers to migrate to javaScript from other OOP languages. In essence, they provide little more than a more natural and possibly familar way to create constructors and prototypes.

Thatt's not the entire story, of course. In JavaScript, there always seems to be some unusual or unexpected behavior behind every feature, no matter how ordinary it looks. It should come as no surprise that classes are no different. We'll barely touch on that in this assignment. For now, think of classes as syntactic sugar, and you'll be okay.

The syntax for defining classes is similar to that of defining functions. In particular, both functions and classes have two significant definition styles: declarations and expressions. We'll examine how classes do that in this assignment.

Class Declarations

The simplest way to create classes in JavaScript is with the class declaration, which looks similar to classes in other languages.
*/


// class Rectangle {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }

//     getArea() {
//         return this.length * this.width;
//     }

//     toString() {
//         return `[Rectangle ${this.width * this.length}]`;
//     }
// }


// /*
// Class declarations begin with the class keyword, followed by the name of the class. The rest of the syntax is similar to the simplified (concise) method definition that you can use in object literals. However, it doesn't require commas between each elemnt of the class.
// */

// let rec1 = new Rectangle(10, 5);
// console.log(rec1.getArea());
// console.log(rec1.toString());

// console.log(typeof Rectangle);


////


/* Class Expressions

Functions have an expression form that does not require a name after the function keyword. Classes have a similar expression form. Consider the following code:
*/

// let Rectangle = class {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }

//     getArea() {
//         return this.length * this.width;
//     }

//     toString() {
//         return `[Rectangle ${this.width * this.length}]`
//     }
// };



//

/*
Identifying An Object's Type

Two ways to identify the type of an object:
1. Using the instanceof keyword
2. Using the constructor property on the object

// Objects created with classes can be type-checked in the same ways:
// */

// // omitted class code

// let rec1 = new Rectangle(10, 5);
// rec1.getArea();
// typeof Rectangle;
// console.log(rec1 instanceof Rectangle); // => true
// console.log(rec1.constructor === Rectangle); // => true

// //

// function createObject(classDef) {
//     return new classDef();
// }

// class Foo {
//     sayHi() {
//         console.log('Hi');
//     }
// }

// let obj = createObject(Foo);
// obj.sayHi();  


/*
Inheritance with Classes

In the previous assignment, we saw and example of constructor inheritance in which one constructor's prototype inherits from another construto's prototype:

*/

/*
function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width;
};

Rectangle.prototype.toString = function() {
    return `[Rectangle ${this.length} x ${this.width}]`;
};

function Square(size) {
    Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function() {
    return `[Square ${this.length} x ${this.width}]`
};


Next, let's convert that code to use classes instead of constructors and prototypes. The Square constructor's prototype inherits from Rectangle.prototype which gives square objects access to methods defined for rectangle objects. We can do the smae thing with classes, but we now use the clean, stratightforward syntax provided for JavaScript classes:

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    toString() {
        return `[Rectangle ${this.width * this.length}]`;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size size);
    }

    toString() {
        return `[Square] $this.width * this.length}`;
    }
}




*/



// let Person = class {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayName() {
//         console.log(`My name is ${this.name}.`);
//     }
// };

// let Student = class extends Person {
//     constructor(name, age, semester) {
//         super(name, age);
//         this.semester = semester;
//     }

//     enrollInCourse(courseNumber) {
//         console.log(`${this.name} has enrolled in course ${courseNumber}.`);
//     }
// };

// let student = new Student('Kim', 22, 'Fall');
// student.sayName(); // logs 'My name is Kim.'
// student.enrollInCourse('JS120');

/*
Static Methods

You can define static methods on classes by using the static keyword:
*/

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    static getDescription() {
        return 'A rectangle is a geometrical shape with 4 sides';
    }

    getArea() {
        return this.length * this.width;
    }

    toString() {
        return `[Rectangle ${this.width * thislength}]`;
    }
}

console.log(Rectangle.getDescription());