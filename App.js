// console.log('sdkfjnskdf');
// console.log("Heloow world" + " lets start")
// console.log("Fasilakis" [0])

// console.log('1231413423'.length)

// let myNumber = "ilias fasilakis";
// console.log(myNumber.length);

// console.log(myNumber[myNumber.length - 1])

// let myName = 'ilias';
// let mySurName = 'fasilakis';

// console.log('my name is ' + myName + " " + mySurName );

// myName = myName + " Hello World";
// console.log(myName);

// let celsius = 10;
// let fahrenheit = celsius*1.8 + 32;
// console.log(fahrenheit);

// let number1 = '10';

// let number2 = 10;

// number1 == number2;
// console.log(number2);

// let subscribed = false;
//  if(subscribed === true)
//  {
//     console.log("You have subscribed")

// }
// console.log('Please subscribe first');

// let cash = 100;
// let price =120;

// if (cash > price)

// {

//     console.log(`you paid more.. here is your change ${cash - price} `)

// }

// else if(cash === price)
// {

//     console.log(`You paid the exct ammount. Have a nice day!`)
// }

//     else {

//         console.log(`Not enough cash. You need ${price - cash} more`)

//     }

/** TERNARY OPERATORS */

//     let hot = true;

// hot? console.log("its hot out there..") : console.log('its cold here');

// let subscribed = true;
// let loggedIn = true;

// let str = subscribed && loggedIn ? 'show the video' : "you need to login and subscribe to see the video";
// console.log(str);

// let cash = 50;
// let price = 100;
// let isStoreOpen = true;

// let result = price<=cash && isStoreOpen ? "give receipt" : "do not give receipt";
// console.log(result);

/*LOOPS ------- DRY (Dont Repeat Yourself)*/
/*count from 1 to 100*/

/*WHILE LOOP*/

// let count = 1;

// while(count<=100)
// {
//     console.log(count);
//     count+=1;

// }

//FOR LOOP

// for(let i=1; i<=20; i=i+1)

// {

// console.log(i);

// if (i % 3 === 0 && i % 5=== 0)
// {

//     console.log(`${i}----->Tigka kwlofanara`)

// }

//  else if(i % 3 === 0) {

//     console.log(`${i}---->Tigaaaaa`)

// }
//  else if (i % 5===0 ) {

//     console.log(`${i}---->kwlofanara`)
// }

// else{

//     console.log(i)
// }

// }

// Frontend Simplified ---- Print every letter

// let string = "Frontend Simplified";

// for (i = 0; i <= 18; ++i) {
//   console.log(`'${string[i]}'`);
// }

/* FUNCTIONS */

// function welcomePerson(name){

//     console.log(`Welcome to the class ${name}`);

// }
// welcomePerson('ilias');

// function sumOfTwoNumbers(num1, num2) {

// return num1 + num2

// }

//   console.log(sumOfTwoNumbers(5, 6));

// function convertTemperature(celsious) {

//  console.log(celsious*1.8 +32);

// }

// convertTemperature(0);
// convertTemperature(10);
// convertTemperature(30);

// const convertTemperature = (celsius) => {

//   return celsius*1.8 +32;

// }

// console.log(convertTemperature(10));

// let arr = [10,20,30,40,50];
// console.log(arr);

// console.log(arr[arr.length -1]);

// arr.push(200);

// console.log(arr);
// arr.filter

// let arr = [20, 30, 40, 50, 100];

// let newArr = arr.filter((element) => {
//   console.log(element);
//   if (element < 50) {
//     return true;
//   }
// });

// console.log(newArr);

/*  THE SAME CODE WITH LESS LINES */

// let arr = [20, 30, 40, 50, 100];

// let newArr = arr.filter(whatever => whatever< 50);

// console.log(newArr);

// let arr = ['FAIL', 'FAIL', 'B'];

// let newArr = arr.filter(element => {

// if (element === 'A+' ||  element === 'A' || element === 'B') {

//     return true;

// }

// })

// console.log(newArr);

// let arr = ['A+','A', 'B', 'FAIL', 'A']
// let grades = ['A+', 'A', 'FAIL']
// let goodGrades = [];

// for (let i = 0; i< arr.length; i++) {

//     if(arr[i] !== 'FAIL') {

//         goodGrades.push(arr[i]);
//     }

// }
// console.log(goodGrades);

// let dollars = [1, 5, 10, 3];

// let cents = dollars.map(element =>  element*100)

// console.log(cents);

/* DOOOOOOOOOOOOM - DOCUMENT OBJECT MODEL -- ALLOWS YOU TO ACCESSAND CHANGE THE STYLING AND CONTENTS OF ELEMENTS ON YOUR WEBSITE*/

//first way to access an element

//console.log(document.querySelector('#title'));

//second way to access an element

//document.getElementById('title').innerHTML = 'Well done';

//Change CSS

// document.querySelector('#title').style.color = 'red';
// document.querySelector('#title').style.fontSize = '60px';

// function changeTitleToRed() {

//     document.querySelector('#title').style.color = 'Yellow';
//     return;

// }

// function toggleDarkMode(){

//     document.querySelector('body').classList.toggle('dark__theme')

// }

// PROMISES

//fetch("https://jsonplaceholder.typicode.com/users/1")

//then (method)

// fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {

// })

// let Array = [7, 13, 6, 300,600, 33, 33, 56,76,44,99,99,99];

// let doubleArray = [];
// let tripleArray = [];
// let sum1 = 0;
// let sum2 = 0;

// function arraySub(Array) {
//   for (let i = 0; i < Array.length; ++i) {
//     if (Array[i] < 100 && Array[i] > 9) {
//       doubleArray.push(Array[i]);
//     } else if (Array[i] > 100 && Array[i] < 1000) {
//       tripleArray.push(Array[i]);
//     }

//     doubleArray.reduce((num1, num2) => {
//       sum1 = num1 + num2;
//       return sum1;
//     }, 0);

//     tripleArray.reduce((num3, num4) => {
//       sum2 = num3 + num4;
//       return sum2;
//     }, 0);
//   }

//   console.log(sum2 - sum1);
// }

// arraySub(Array);

//project//

// let array = ["Mahesh", "Ruhez", 23, 31, "sameer"];

// var a = array[2] + array[3];
// console.log("the sum of the numbers in the array is:" + a);

// let str1 = array[0].length;
// console.log("the length of the 2nd element of the array is:" + str1);

// let str2 = array[1].length;
// console.log("the length of the 3rd element of the array is:" + str2);

// let str3 = array[4].length;
// console.log("the length of the 5th element of the array is:" + str3);

// let Sub = a - str1 - str2 - str3;

// console.log(Sub);

// let array = ["Mahesh", "Ruhez", 23, 31, "sameer"];

// let sumOfNumbers = 0;
// let lengthOfStrings = 0;
// let sum = 0;

// function sums(array) {
//   for (let i = 0; i < array.length; ++i) {
//     if (typeof array[i] === "string") {
//       lengthOfStrings += array[i].length;
//     } else if (typeof array[i] !== "string") {
//       sumOfNumbers += array[i];
//     }
//   }
//   console.log("the total length of all the strings is: " + lengthOfStrings);
//   console.log("the total length of all the strings is: " + sumOfNumbers);
//   console.log(
//     "The Subtraction gives us the following result: " +
//       (sumOfNumbers - lengthOfStrings)
//   );
// }

// sums(array);

// const person ={

//   name: 'Kyle',
//   friend :{name : 'Joe',
//   friend:{name:'Sally'

//         },

//       }
//    }

//    let currentPerson = person
//    while(currentPerson != null){

//     console.log(currentPerson.name)
//     currentPerson = currentPerson.friend
//    }

// RECURSION

// for(let i =0; i<10; i++){

//   console.log(i)
// }

//instead of for loop we try out recursion

// function showNumber(number){

//   //base Case
//   if (number >10) return

//   console.log(number)
//   showNumber(number +1)
// }
// showNumber(1)

//the same as above but now we are going to use Recursion
// const person ={

//     name: 'Kyle',
//     friend :{name : 'Joe',
//     friend:{name:'Sally'

//           },

//         }
//      }

//      function printNames(Person){
//      if (Person == null) return
//       console.log(Person.name)
//       printNames(Person.friend)
//      }

//      printNames(person)

//1st itteration  prints Kyle
//2nd itteratuion prints

//  let currentPerson = person
//  while(currentPerson != null){

//   console.log(currentPerson.name)
//   currentPerson = currentPerson.friend
//  }

// let theNumber = Number(prompt("Pick a number"));
// if(!Number.isNaN(theNumber)) {

//   console.log("Your number is the square root of " + theNumber*theNumber);
// }

//     let yourName;
// do {
//   yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);

// let result=''
// for(let i=0; i<8; i++) {

//   result=result +"#"
//   console.log(result)
// }

// for(let i=1; i<101; i++)

// if(i % 3 === 0 && i% 5 === 0){
//   console.log('FizzBuzz')

// }

// else if(i % 3 === 0)
// {
//   console.log('Fizz')
// }

// else if(i % 5 === 0)
//   {

//     console.log('Buzz')
//   }

// else{
//   console.log(i)
// }

// let string = ' '

// for(let i =1; i<8; i++){

//   for(let j = 1; j<8; j++){

// if ( i % 2 === 0){

//   string += ' ' + '#'
// }
// else{

//   string+='#'
// }

// console.log(string)
//   }
// }

// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

//It takes an array and an index, and it returns a new array that is a copy of the original array with the element at the given index removed.
// function remove(array, index) {
//   return array.slice(0, index).concat(array.slice(index + 1));
// }

// console.log(remove([0, 1, 2, 3, 4, 5, 6], 3));

const str1 = "5";

// console.log(str1.padStart(2, '0'));

// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

// console.log(maskedNumber);

// let sentence = "Secretarybirds specialize in stomping";
// let words = sentence.split(" ");
// console.log(words);
// console.log(words.join(". "))

// console.log("LA ".repeat(3))

// function max(...numbers) {
//   let result = -Infinity;
//   for (let number of numbers) {
//     if (number > result) result = number;
//   }
//   return result;
// }

// console.log(max(4, 1, 9, -2))

// function max(...numbers) {
//   let result = -Infinity;
//   for (let number of numbers) {
//     if (number > result) result = number;
//   }
//   return result;
// }

// let numbers = [1,2,3,4,45,5,6,67,78,712,32]
// console.log(max(...numbers))

// const names= ['james', 'liliana', 'George', 'maria']

// const getNames =

// console.log(getNames)

// const studentsIdMap = {
//   1: {
//     name : 'James Quick',
//     hours : 12,
//     year : 'Senior'
//   },

//   2: {
//     name : 'Nick Carter',
//     hours : 7,
//     year : 'Junior'
//   },

//   3: {
//     name : 'Lake Traster',
//     hours : 10,
//     year : 'Senior'
//   },

//   4: {
//     name : 'George Cave',
//     hours : 15,
//     year : 'Freshman'
//   }

// }

// const studentsIdMapCopy = {...studentsIdMap}
// studentsIdMapCopy[1].name = 'Billy'
// console.log(studentsIdMapCopy)
// console.log(studentsIdMap)
// console.log(studentsIdMap == studentsIdMapCopy)

// function randomPointOnCircle(radius) {
//   let angle = Math.random() * 2 * Math.PI;
//   return {x: radius * Math.cos(angle),
//           y: radius * Math.sin(angle)};
// }
// console.log(randomPointOnCircle(2))

// function range(start, end, step) {
// let numArray = []

// if(step>=0){
// for ( let i = start; i<=end; i=i+step){

//   numArray.push(i)
// }}

// else{

//   for (let i=end; i>=start;  i = i + step ){

//     numArray.push(i)
//   }

// }
// return numArray
// }

// console.log(range(1,10,-2))

// function sum(array){

//  return array.reduce((initial, current)=> initial + current,0)
// }

// console.log(sum(range(1,10,2)))

// function arrayToList(array) {
//   let list = null;
//   for (let i = array.length - 1; i >= 0; i--) {
//     list = {value: array[i], rest: list};
//     console.log(list)
//   }
//   return list;
// }

// function listToArray(list) {
//   let array = [];
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }
//   return array;
// }

// function prepend(value, list) {
//   return {value, rest: list};
// }

// function nth(list, n) {
//   if (!list) return undefined;
//   else if (n == 0) return list.value;
//   else return nth(list.rest, n - 1);
// }

// console.log(arrayToList([10, 20,30,40,50]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

console.log(list.value)

function arrayToList(array) {
list = null
  for(let i = array.length -1; i>=0; i--){

list = {value:array[i], rest:list}
console.log(list)
  }
  return list


}


console.log(arrayToList([1,2,3]))

let array = [];
let node = list;
function listToArray(newlist){

  
while (node) { // shorthand for `!!node`: tests the value to be truthy
  array.push(node.value);
  node = node.rest;
}
return array
}

console.log(listToArray())



function prepend(element,newList){

 return newList = {element, rest: list }


}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else{
  
   return nth(list.rest, n - 1); // return nth(list.rest, 2-1)
  }

}

  console.log(nth(list,2))


  function deepEqual(value1, value2){
if(value1 === value2) return true;

if (val1 == null || typeof val1 !== 'object' ||
      val2 == null || typeof val2 !== 'object') return false;

let keys1 = Object.keys(value1) 
let keys2 = Object.keys(value2) 

if(keys1.length != keys2.length) return false


for (let key of keys1){

  if(!keys2.includes(key)) {return false}
  
}

return true

  }
  





