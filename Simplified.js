// console.log("Hello world");

/*call back functions*/

// function printVariable(variable)
// {
// console.log(variable);

// }

// function printString(name, callback){

//     callback('Hello ' + name)
// }

// printString('ilias', (a)=>{

//     console.log(a)
// })

// function printHi(name){

//     console.log('hi')

// }

// let printHi = (name) => console.log(name);

// printHi("ilias");







// function printPhrase(name, printfunction ){

// printfunction('Hello ' + name)

// }


// printPhrase('ilias', WHATEVER => console.log(WHATEVER))

// function printVariable(variable){

//     return function(variable2){
//         console.log(variable)
//         console.log(variable2)


//     }
// }

// printVariable(1)

// let a = printVariable(1)

// a(2)
// a(3)
// a(4)



// // Write your code below
// const cards = ["diamond", "spade", "heart", "club"];

// // Write your code below

// let currentCard = [];

// let counter = 0;
// while (currentCard[counter] !== "spade") {
//   currentCard = cards[Math.floor(Math.random() * 4)];
  
// }

// console.log(currentCard);

// const cards = ['diamond', 'spade', 'heart', 'club'];


// let currentCard;


// while (currentCard != 'spade') {
// currentCard = cards[Math.floor(Math.random() * 4)];
// console.log(currentCard);

// }

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
retreat (){

  console.log(retreatMessage)
},

takeOff(){

  console.log('Spim... Borp... Glix... Blastoff!')
}

}

alienShip.retreat();

alienShip.takeOff();














