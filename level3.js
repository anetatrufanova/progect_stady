// String: greeting
let name = prompt('your name?','');
alert("Hello" + ' ' + name);

// String: gopni4ek
let string = prompt('Введіть строку', '');
let newString = string.split(',').join(',блін');

console.log(newString)

// String: capitalize
let str = "cANBerRa";
let result = str[0].toUpperCase() + str.slice(1).toLowerCase();

console.log(result) //Canberra

//String: word count
let newText = prompt('Your text', '');
let textLength = newText.split(' ');
console.log(textLength)


// String: credentials
let userName = prompt('Your name?', '');
let userFirstName = prompt('Your firstname?','');
let userSurname = prompt('Your surname?','');
let fullName = `${userName[0].toUpperCase() + userName.slice(1)} ${userFirstName[0].toUpperCase() + userFirstName.slice(1)} ${userSurname[0].toUpperCase() + userSurname.slice(1)}`;

console.log(fullName.trim())

// String: beer
let str2 = "Було жарко. Василь пив пиво вприкуску з креветками";
let result2 = str2.split('пиво').join('чай');

console.log(result2) //"Було жарко. Василь пив чай уприкуску з креветками"

// String: no tag
let str3 = "якийсь текст, в якому є один тег <br /> і всяке інше";
let newStr3 = str3.indexOf('<br />');
let result3 = `${str3.slice(0,32)} ${str3.slice(39)}`

console.log(result3) //якийсь текст, в якому є один тег і всяке інше

//String: big tag
let str4 = "якийсь текст, в якому є один тег <br /> і всяке інше";
let newStr4 = str4.indexOf('br');
let result4 = `${str4.slice(0,34)}${str4.slice(34, 36).toUpperCase()}${str4.slice(36)}`

console.log(result4) //якийсь текст, в якому є один тег і всяке інше

// String: new line
let newLine = prompt('text','');
let textLine = newLine.split('/n');
console.log(textLine)

// String: youtube
const linkRegExp =/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
const YouTube = prompt('text','');
let identVideo = YouTube.split('?').join(' ');
console.log(YouTube.match(linkRegExp))
console.log(identVideo)

