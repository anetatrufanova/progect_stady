// assign: evaluation
var a = 5;  
var b, c;

b = (a * 5);  
b = (c = b/2);
// 12.5
b = (c = (a * 5) / 2);
// a*5=25
// 25/2=12,5

// Number: age
let age = prompt('Your age?', '');
let yearBirth = 2024 - age;

alert('Year of birth' + ' ' + yearBirth);

// Number: temperature

let temperature = prompt('Temperature °C' , '');
//Фаренгейт до Цельсія : C = (F - 32)/1,80
let fahrenheit = ( temperature * 1.8) + 32;
let celsius = (fahrenheit - 32) / 1.8;
console.log(fahrenheit.toFixed(2));
console.log(celsius.toFixed(2));

// Number: divide
// let numOne = prompt('number one' , '');
// let numTwo = prompt('number two' , '');

// let sumNumber = Math.round(numOne / numTwo);
// console.log(sumNumber);

// Number: currency
const rate = 38.14;
let rateUAH = prompt('number', '');

sumUSD = rateUAH / rate;
alert(sumUSD.toFixed(2));