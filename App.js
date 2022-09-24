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

let array = ["Mahesh", "Ruhez", 23, 31, "sameer"];

let sumOfNumbers = 0;
let lengthOfStrings = 0;
let sum = 0;

function sums(array) {
  for (let i = 0; i < array.length; ++i) {
    if (typeof array[i] === "string") {
      lengthOfStrings += array[i].length;
    } else if (typeof array[i] !== "string") {
      sumOfNumbers += array[i];
    }
  }
  console.log("the total length of all the strings is: " + lengthOfStrings);
  console.log("the total length of all the strings is: " + sumOfNumbers);
  console.log(
    "The Subtraction gives us the following result: " +
      (sumOfNumbers - lengthOfStrings)
  );
}

sums(array);


