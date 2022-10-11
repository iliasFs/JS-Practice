// import "bootstrap/dist/css/bootstrap.css";

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

// class HospitalEmployee {
//     constructor(name) {
//       this._name = name;
//       this._remainingVacationDays = 20;
//     }

//     get name() {
//       return this._name;
//     }

//     get remainingVacationDays() {
//       return this._remainingVacationDays;
//     }

//     takeVacationDays(daysOff) {
//       this._remainingVacationDays -= daysOff;
//     }
//   }

//   class Nurse extends HospitalEmployee {
//     constructor(name, certifications) {
//       super(name);
//       this._certifications = certifications;
//     }

//     get certifications() {
//       return this._certifications;
//     }

//     addCertification(newCertification) {
//       this.certifications.push(newCertification);
//     }
//   }

//   const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
//   nurseOlynyk.takeVacationDays(5);
//   console.log(nurseOlynyk.remainingVacationDays);
//   nurseOlynyk.addCertification('Genetics');
//   console.log(nurseOlynyk.certifications);

// function AlphabetSoup(str) {

//     // code goes here
//    let newString =  str.split('').sort().join('');

//     return newString

//   }

//   console.log(AlphabetSoup('hello'))

//   const paragrafos = document.getElementById("demo")
//   AlphabetSoup(array,)

// function ABCheck(str) {
//   // code goes here

//   if (str.includes("a") && str.includes("b")) {
//     var diff = str.indexOf("a") - str.indexOf("b");
//   }
//   console.log(diff)

//   if (diff === 4 || diff === -4) {
//     console.log("true");
//   }

//   else{console.log("false");}
// }

// ABCheck('Laura sobs');

// function VowelCount(str) {

//     // code goes here
//     let vowels = 'AaEeiIoOUu'
//     for (i = 0; i<str.length; i++){

//     }

//   }

// function WordCount(str) {

//     // code goes here
//     console.log(str.split(' ').length);

//   }

//   WordCount('sdkjfbksjbf fkjnskfjbn skjnflsjfn ksjfnlsjnf lsnsjnf')

// let str = "xoxoxoxoxoxoxo";
// let stringArray = str.split("");

// console.log(stringArray)
// const xArray = stringArray.filter((char) => char === "x");
// const oArray = stringArray.filter((char) => char === "o");

// if (xArray.length === oArray.length) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// let str = "hello world gfgdfg dfgdfgd dfgdfg";
// firstArray = str.split(' ').map(item => item[0].toUpperCase())
// console.log(firstArray)

// sliceArray = str.split(' ').map(item => item.slice(1))
// console.log(sliceArray)

// console.log(firstArray.concat(sliceArray))

// for (let i = 0; i < sliceArray.length; i++) {
//   finalArray.push(firstArray[i] + sliceArray[i])}

// console.log(finalArray)

// const paparia = str
//   .split(" ")
//   .map((item) => item[0].toUpperCase().concat(item.slice(1)))
//   .join(" ");

// console.log(paparia);

// let str = "+a+c+b+==+v+";
// code goes here
// str.split("").forEach(item =>{
//     if(item === '+' || item === '='){

//     }

// })
// ;

// console.log(str.split(""));

// function paparia(str) {
//   strArray = str.split("");
//   count = 0;
//   console.log(strArray);

//   return strArray.filter((item, index, arr) => {
//     if (arr[index] == arr[index - 1] - 1) {
//       return item;
//     }
//   }).length;

// }

// console.log(paparia("65"));

// function Superincreasing(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= sum) {
//       return false;
//     } else {
//       sum += arr[i];
//     }
//   }
//   return true;
// }

// console.log(Superincreasing([0,0,0,2,2]));

// function Superincreasing(arr) {
//   let x = true;

//   let result = arr.reduce((initialValue, currentValue) => {
//     if (currentValue <= initialValue) {
//       x = false;
//     } else {
//       return currentValue + initialValue;
//     }
//   }, 0);

//   return x;
// }

// console.log(Superincreasing([1, 4, 10, 25]));

// function ChangingSequence(arr) {
//   if (arr[0] < arr[1]) {
//     var increcement = true;
//   } else {
//     increcement = false;
//   }
//   for (let i = 1; i < arr.length; i++)
//     if (arr[i] > arr[i + 1] && increcement == true) {
//       return i;
//     } else if (arr[i] < arr[i + 1] && increcement == false) {
//       return i;
//     }

//   return -1;
// }

// console.log(ChangingSequence([1, 2, 3, 4, 5]));
// console.log(ChangingSequence([1, 2, 7, 5]));
// console.log(ChangingSequence([8, 5, 2, 6]));




function disemvowel(str) {
  
  let vowels = 'aeiouAEIOU'
  let finalArray = []
  let arr = str.split('')
  arr.filter(item=> {


    if item
  })
 .join('')
  

 return finalArray
 


console.log(disemvowel('malaka ilia ksekolla'))