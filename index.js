console.log("Belajar Dasar pemrograman JavaScript");

let x;
console.log(typeof(x));           // undefined

let y = 12.25;
console.log(typeof(y));           // number

/* Increment dan Decrement */
let postfix = 5;
console.log(postfix++);           // output 5
console.log(postfix);             // output 6

let prefix = 5;
console.log(++prefix);            // output 6

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);             // output 1234567890123456789012345678901234567890n
console.log(myInt);                // output 1.2345678901234568e+39

/* determine value boolean between true and false */
let x1 = 10;
let y1 = 7

let isGreeter = x1 > y1;
let isLess = x1 < y1;
let isEqual = x1 == y1;
let isNotEqual = x1 != y1;

console.log(isGreeter);       // true
console.log(isLess);          // false
console.log(isEqual);         // false
console.log(isNotEqual);      // true

/* determine value symbol */
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);      // false

/* determine value operator same and indetic */
const aString = "10";
const aNumber = 10;

console.log(aString == aNumber);      // true
console.log(aString === aNumber);     // false

/* case study in making decisions when it rains */

let isRaining = false;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
  console.log("Perlu membawa payung karena mau hujan.");
} 
console.log("berangkat kegiatan.");

/* condition ? true expression : false expression */

const isMember = true;
const discout = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discout * 100}%`);

/* Switch case statement */
let language = "Indonesian";
let greeting = null;

switch(language) {
  case "English":
    greeting = "Good Moring!";
    break;
  case "French":
    greeting = "Bonjour!";
    break;
  case "Japanese":
    greeting = "Ohayou Gazaimasu!";
    break;
  default:
    greeting = "Selamat pagi!";
}

console.log(greeting);

/* For of Loop */
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];
for (const arrayItem of myArray) {
  console.log(arrayItem);
}

/* While loop */
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}