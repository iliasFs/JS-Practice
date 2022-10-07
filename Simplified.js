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

// let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// // Write your code below
// let alienShip = {
// retreat (){

//   console.log(retreatMessage)
// },

// takeOff(){

//   console.log('Spim... Borp... Glix... Blastoff!')
// }

// }

// alienShip.retreat();

// alienShip.takeOff();


// let spaceship = {
//     passengers: null,
//     telescope: {
//       yearBuilt: 2018,
//       model: "91031-XLT",
//       focalLength: 2032 
//     },
//     crew: {
//       captain: { 
//         name: 'Sandra', 
//         degree: 'Computer Engineering', 
//         encourageTeam() { console.log('We got this!') },
//        'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
//     },
//     engine: {
//       model: "Nimbus2000"
//     },
//     nanoelectronics: {
//       computer: {
//         terabytes: 100,
//         monitors: "HD"
//       },
//       'back-up': {
//         battery: "Lithium",
//         terabytes: 50
//       }
//     }
//   }; 
  
  
//   let capFave = spaceship.crew.captain['favorite foods'][0]
//   spaceship.passengers = [{'maria': 'pentagiotisa'}]
  
  
//   let firstPassenger = spaceship.passengers[0]

//   console.log(firstPassenger.maria)


class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);
  
  
  











