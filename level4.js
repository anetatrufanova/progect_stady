// // Number: odd
// let number = prompt('введіть число', '');
// let result;

// if(number % 2 === 0){
//     alert('number true');
// }
// else{
//     alert('number false');
// }

// String: lexics


// // Boolean
// let textName = confirm('Your name Ania?');
// let textAge = confirm('Вам 18 років?');
// console.log(textName, textAge)

// // Boolean: if
// let gender = confirm('ви жінка?')
// if(gender){
//     alert("Ви жінка")
// }
// else {
//     alert("Ви чоловік")
// }

// Comparison: sizes


// // Ternary
// let message = confirm('ви жінка?') ? "Ви жінка" : "Ви чоловік"
// alert(message)

// // Prompt: or
// let age = prompt('Your age?') || alert('error')
// let yearBirth = 2024 - age;

// alert('Year of birth' + ' ' + yearBirth);


// // Confirm: or this days
// let robot = confirm("шопінг?") || alert("ти - бяка")

// // Confirm: if this days
// let robotText = confirm("шопінг?")
// if(!robotText){
//     alert("ти - бяка")
// }

// // Default: or
// let nameText = prompt('name') || console.log("Anna")
// let firstName = prompt('FirstName') || console.log("Ivanov")
// let surname = prompt('surname') || console.log("Iryna")
// console.log(nameText, firstName, surnamesd)

// // Default: if
// let nameText = prompt('name') 
// let firstName = prompt('FirstName') 
// let surname = prompt('surname')
// if(nameText){
//     console.log(nameText)
// }
// else{
//     console.log("Anna") 
// }
// if(firstName){
//     console.log(firstName) 
// }
// else{
//     console.log("Ivanov")
// }
// if(surname){
//     console.log(surname)
// }
// else{
//     console.log("Iryna")
// }

// // Login and password
// let login = prompt('login')

// if(login === 'admin'){
// alert('welcome')
// }
// else{
//     alert('error')
// }
// let password = prompt('password')
// if(password === 'qwerty'){
//     alert('welcome')
// }
// else{
//     alert('error')
// }

// Currency exchange
let currency = prompt('ввеіть валюту(usd, eur, pln)')
let exchange = confirm('бажаєте купити?')
const rate = {
    USD: 38,
    EUR: 40,
    PLN: 10 
}