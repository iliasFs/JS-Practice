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

// function disemvowel(str) {
//   l;
//   let strArr = str.split("");
//   finalArray = [];
//   str.forEach((item) => {
//     if (item.match(vowels)) {
//       finalArray.push(item);
//     }
//     console.log(finalArray);
//   });
// }

// console.log(disemvowel('malaka ilia ksekolla'))

// function disemvowel(str) {

//   return str.replace(/[aeiou ]/ig,'')
// }
// console.log(disemvowel('This is a work of ART'))

// // //create a function that removes all vowels from string?

// function RemoveVowels(str) {
//   return str
//     .split("")
//     .filter((s) => !s.match(/a|e|i|o|u/i))
//     .join("");
// }
// console.log(RemoveVowels("hello"));

// function digitalRoot(n) {
//   function recursiveSum(num) {
//     if (num < 1) {
//       return num;
//     }
//     return num + recursiveSum(num - 1);
//   }
//   if (n < 10) {
//     return recursiveSum(n);
//   } else if (n >= 10) {
//     let textNum = n.toString();
//     let sum = 0;
//     for (let i = 0; i < textNum.length; i++) {
//       sum += parseInt(textNum[i]);
//     }
//     return sum;
//   }
// }

// console.log(digitalRoot(15));

// function digitalRoot(n) {
//   function recursiveSum(num) {
//     if (num < 1) {
//       return num;
//     }
//     return num + recursiveSum(num - 1);
//   }
//   if (n < 10) {
//     return recursiveSum(n);
//   } else if (n >= 10) {
//     var sum = n
//       .toString()
//       .split("")
//       .reduce((acc, curr) => {
//         return parseInt(acc) + parseInt(curr);
//       }, 0)

//   }

//   if(n>10){

//   if (sum < 10) {
//     return sum;
//   }

//   else{

//      var newsum = sum
//       .toString()
//       .split("")
//       .reduce((accnew, currnew) => {
//         return parseInt(accnew) + parseInt(currnew)
//       }, 0)

//     }

//      return new

// }

// console.log(digitalRoot(99876));

// function digitalRoot(n) {

// if (n < 10)

// return n

//   return digitalRoot(
//     n.toString().split('').reduce((acc, d) => {
//       return acc + +d;
//     },0));

//   }

//   console.log(digitalRoot(549872342342))

// function DNAStrand(dna) {
//   const newDna = dna
//     .split("")
//     .map((item, index, arr) => {

//     }

//     )}

//   return newDna;

// console.log(DNAStrand("ATTGC"));

// function DNAStrand(dna){
//   let sequence = {
//     "A": "T",
//     "T": "A",
//     "G": "C",
//     "C": "G"
//   }
//   return dna.replace(/A|T|G|C/g, function(matched){
//     return sequence[matched];
//   });
// }

// function digPow(n, p) {
//   const nArray = n.toString().split("");

//   var K = 0;
//   j = 0;

//   for (let i = 0; i < nArray.length; i++) {
//     K += Math.pow(nArray[i], p + j);
//     j++;
//   }

//   K % n === 0? K / n : -1;
// }

// console.log(digPow(89, 1));

// function tribonacci(signature,n){
//   let arr = signature
//   var sigSum = signature.reduce((init, curr)=>{
//    return init + curr

//     },0)

//   arr.push(sigSum)

//   for(let i =1; i<n; i++){

//   arr.push(arr.reduce((initial, current,index)=>{

//   initial + current[index+ i]

//   }),0)

//     }
//     return arr
//   }

// function tribonacci(signature,n)
// {if (n === 0) {
//     return []
//   } else if (n === 1)
//   {
//     return [signature[0]]
//   }
//     else if(n === 2)
//       {return [signature[0], signature[1]]}

//    else {
//     for (let i = 3; i < n; i++) {

//       signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3]

//     }
//     return signature
//   }
// }

// function tribonacci(signature, n) {
//   while (signature.length < n)
//     signature.push(
//       signature.slice(-3).reduce((total, num) => {
//         return total + num;
//       })
//     );
//   return signature.slice(0, n);
// }

// function tribonacci(arr,n){
//   if (n < 3) return arr.slice(0, n);
//   return [arr[0]].concat(tribonacci([arr[1], arr[2], arr[0] + arr[1] + arr[2]], n-1));
// }

// function descendingOrder(n) {
//   var result = n
//     .toString()
//     .split("")
//     .sort()
//     .reverse()
//     .join("");

//     console.log(typeof(+result))
//   return +result;

// }

// console.log(descendingOrder(3456));

// function GroupTotals(strArr) {

//   strArr.forEach((item,index,newArr)=>{

// if(item[index] === "'"){

//   item[index].replace('"', '');
// }
// return console.log(newArr)
// })

//   strArr.reduce(function(result, item) {
//     var key = Object.keys(item)[0]; //first property: a, b, c
//     result[key] = item[key];
//     return result;
//   }, {});
// }
// // keep this function call here
// console.log(GroupTotals(["X:-1", "Y:1", "X:-4", "B:3", "X:5"]));

// function grabDoll(dolls){
//   var bag=[];
//  for(let i = 0; i < dolls.length; i++){

//    if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll')

//  {
//    bag.push(dolls[i])

//  }

//    else {

//      continue
//    }

//    if ( bag.length === 3)

//    {

//      break
//    }
//   return bag;
// }}

// feast=(beast, dish)=>beast.slice(0,1)==dish.slice(0,1)&&beast.slice(-1)==dish.slice(-1)

// function expressionMatter(a, b, c) {
//   let leftBracket = (a+b)*c
//   let rightBracket = a*(b+c)
//   let multiAll = a*b*c
//   let sumAll = a+b+c

//   if(a===1 &&b===1 && c===1)
//   return 3
//   if(leftBracket>rightBracket && leftBracket>multiAll && leftBracket > sumAll)
//     return leftBracket

//   if (rightBracket>leftBracket && rightBracket > multiAll && rightBracket> sumAll)
//     return rightBracket

//   if(multiAll>leftBracket && multiAll>rightBracket && multiAll> sumAll)
//     return multiAll

//   else return sumAll

//   }

//   console.log(expressionMatter(1,2,3))

// function removeDubls(arr) {
//   return arr.filter((num, index, ar1) => {
//     return ar1.slice(index + 1, ar1.length).includes(num) ? null : num;
//   });
// }
// console.log(removeDubls([1, 1, 1, 2, 2]));
// function remove (string) {

//   if(string[string.length-1] === '!')
//   return string.split('').slice(0,string.length-1).join('')
//   return string
//  }

//  console.log(remove('Mark Hi!'))

// function twoSort(s) {
//   return s
//     .sort()
//     .slice(0, 1)[0]
//     .split("")
//     .map((item) => item + "***")
//     .join("")
//     .split("")
//     .slice(0, -3)
//     .join("");
// }

// console.log(
//   twoSort([
//     "bitcoin",
//     "take",
//     "over",
//     "the",
//     "world",
//     "maybe",
//     "who",
//     "knows",
//     "perhaps"
//   ])
// );

// function positiveSum(arr) {

//   return  arr.filter(item=>item > 0).reduce((a,b)=>{a+b}),0
//     }

//   console.log(positiveSum([1,2,3,4,5]));

// function doubleChar(str) {
//   let newString = "";
//   for (let i = 0; i < str.length; i++) {
//     newString += str
//       .replace(str[i], str[i] + str[i])
//       .split("")
//       .slice(i, i + 2)
//       .join("");
//   }
//   return newString;
// }

// console.log(doubleChar("Adidas"));

// Input: ["X:-1", "Y:1", "X:-4", "B:3", "X:5"]
// Output: B:3,Y:1

// function CountingMinutesI(str) {

//     var split = str.split('-')

//     function toMinutes(time) {

//       var hour = parseInt(time.split(':')[0])
//       var minutes = parseInt(time.slice(0, time.length - 2).split(':')[1])
//       var totalMin = hour*60 + minutes

//       if (time[time.length - 2] === 'p')
//         if (hour !== 12)
//           return totalMin + 720
//         else
//           return totalMin
//       else
//         if (hour === 12)
//           return totalMin + 720
//         else
//           return totalMin
//     }

//     var time1 = toMinutes(split[0])
//     var time2 = toMinutes(split[1])

//     if ( time1 > time2 )
//       return (1440 - time1) + time2
//     else
//       return time2 - time1
//   }

//   // keep this function call here
//   CountingMinutesI(readline());

// console.log(GroupTotals(["X:-1", "Y:1", "X:-4", "B:3", "X:5"]))

// function SimpleEvens(num) {

//     let array = num.toString().split('')
//     let newArray =  num.toString().split('').filter(item => item%2 === 0)
//     console.log(newArray)

//     return array.length === newArray.length? true:false

//     }

//     console.log(SimpleEvens(123253745674))

// Have the function GroupTotals(strArr) read in the strArr parameter containing key:value pairs where the key is a string and the value is an integer. Your program should return a string with new key:value pairs separated by a comma such that each key appears only once with the total values summed up.

// For example: if strArr is ["B:-1", "A:1", "B:3", "A:5"] then your program should return the string A:6,B:2.

// Your final output string should return the keys in alphabetical order. Exclude keys that have a value of 0 after being summed up.

// function GroupTotals(strArr) {
//   let strObj = {};
//   newArr = strArr
//     .map((item) => item.split(":"))
//     .map((item) => {
//       if (item[0] in strObj) {
//         strObj[item[0]] += parseInt(item[1]);
//       } else {
//         strObj[item[0]] = parseInt(item[1]);
//       }
//     });
//   console.log(strObj);

//   for (let item in strObj) {
//     if (strObj[item] === 0) {
//       delete strObj[item];
//     }

//   }

//   let finalArray = Object.keys(strObj).map(
//     (key) => { return [key, strObj[key]]}
// )
//   console.log(finalArray)

//   finalArray.sort()
//   console.log(finalArray)
// }

// console.log(GroupTotals(["B:-1", "A:1", "B:3", "A:5"]));

// function VowelCount(str) {
//     let vowels = 'AaEeIiOoUu'
//     let finalArray = []
//   //strArr = ['A', "l", "l".....]
//     str.split('').map(item=>{

//         if(vowels.includes(item)){

//             finalArray.push(item)
//         }

//      })

//      return finalArray.length

//   }

//   console.log(VowelCount('coderbyte'))

// function ABCheck(str) {

//     for(i=1; i<str.length; i++){

//   if (str[i] === 'a' && str[i*4]!== 'b'){
//     return false
//     }

//     return true

//   }
//   }

//   console.log(ABCheck('abccccazzzb'))

// function ExOh(str) {
//     let countx = 0
//     let counto =0

//     console.log(str.split('x'))
//     console.log(str.split('o'))
//   for(let i =0; i<str.length; i++){
//   if (str[i] === 'x'){

//     countx++
//   }
//   else if(str[i] === 'o'){

//     counto++
//   }
//   }

//   return countx === counto? 'true':'false'

//   }

//   console.log(ExOh('xoxoxoxoxoxoxoxo'))

// function RunLength(str) {
//   let obj = {};

//   let strArr = str.split("");

//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]] += 1;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }

//   console.log(obj);
//   console.log(Object.keys(obj));

//   let newArray = Object.keys(obj).map((key) => [obj[key], key]);

//   return newArray
//     .join("")
//     .split("")
//     .filter((item) => item !== ",")
//     .join("");
// }

// // keep this function call here
// console.log(RunLength("aaaabbbbvvvvnnnn"));

// function LongestWord(sen) {
//   let regex = /[a-z0-9]+/gi;
//   let maxLengthIndex = 0;
//   let arr1 = sen.match(regex);
//   let arr2 = sen.match(regex).map((item) => item.length);
//   maxLengthIndex = Math.max(...arr2);
//   let maxItem = arr2.indexOf(maxLengthIndex);

//   return arr1[maxItem];
// }

// console.log(LongestWord("123456789 98765432"));


// function Palindrome(str) { 

//   console.log(str.split('').filter(item=>item !== ' ').reverse().join(''))
//   console.log(str.split('').filter(item=>item !== ' ').join(''))
//   return str.split('').filter(item=>item !== ' ').reverse().join('') == str.split('').filter(item=>item !== ' ').join('')? true:false

//   console.log(str.split('').reverse().join(''))

// }
   
// // keep this function call here 
// console.log(Palindrome('never odd or even'));



// function printPattern(range) {
//   var str=""
//   let j=1
//   for(var i=1;i<=range;i++){   
//   str += j;
//   j++
//   console.log(str);
//     }
    
//   }
// printPattern(8);


// function digitSum(num) {
//   var sum=0;
//   while(num!=0){
//    sum += num % 10;
//    num = Math.floor(num/10);
//   }
//   return sum;
// }
// console.log(digitSum(4367)); //20
// console.log(digitSum(56349)); //27


// var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];  
// var largest = arr[0];
// for(var i=0;i<arr.length;i++){
//    largest = arr[i]>largest ? arr[i]:largest; 
// }
// console.log(largest)


// var arr = [[0,1,1],[0,1,0],[1,0,0]];
// var zeroCount = [];
// for(var i=0;i<arr.length;i++){
//   for(var j=0;j<arr[0].length;j++){
//     if(arr[i][j]==0){

// zeroCount.push(arr[i][j])
//     }
//   }
// }
// console.log(zeroCount.length)Pro


function findProd(arr1, arr2) {
  arrProd = []
  for(var i=0; i < arr1.length; i++){
     arrProd.push(arr1[i] * arr2[i]); 
  }
  return arrProd
}


console.log(findProd([3,45,23,78,34], [4,2,34,4,12,1]))
