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




