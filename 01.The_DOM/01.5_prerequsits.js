// let and const define block-scoped variables, which means that the variable is only in scope within the block in which it is declared. Contrast this with the behavior of the funcion scoped variables defined by the var keyword.

// var Thing;

// {
//     let privateScope = new WeakMap();
//     let counter = 0;

//     Thing = function() {
//         this.someProperty = 'foo';

//         privateScope.set(this, {
//             hidden: ++counter,
//         });
//     };

//     Thing.prototype.showPublic = function() {
//         return this.someProperty;
//     };

//     Thing.prototype.showPrivate = function() {
//         return privateScope.get(this).hidden;
//     };
// }

// console.log(typeof Thing);
// var thing = new Thing();
// console.log(thing);
// console.log(thing.showPublic());
// console.log(thing.showPrivate());


// No Strict Mode
// let obj = {
//     a: 5,
//     go: function() {
//         this.a = 42;

//     },
// };

// let doIt = obj.go.bind(obj);
// doIt();
// console.log(obj.a);


/////

"use strict"


const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
         "10", "Jack", "Queen", "King", "Ace"];

let deck;

function createDeck() {
  let allCards = () => {
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (let counter = 0; counter < 400; counter += 1) {
    let randomIndex1 = randomCardIndex();
    let randomIndex2 = randomCardIndex();
    let tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());