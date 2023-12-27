/* =========================== Function =========================== */
function multiply(a, b) {
  return a * b;         // function dapat mengembalikan suatu nilai
}

let result = multiply(4, 6);
console.log(result);

/*  tanpa pengembalian nilai. langsung mengeluarkan nilai
function greeting(language, name) {
  if(language === "English") {
    console.log(`Good Morning ${name}`);
  } else if(language === "French") {
    console.log(`Bonjour ${name}`);
  } else if(language === "Japanese") {
    console.log(`Ohayo ${name}`);
  } else {
    console.log(`Selamat Pagi ${name}`);
  }
}

greeting("Japanese", "Yusril");
*/

// Declaration Function
function greeting(language, name) {
  if(language === "English") {
    return `Good Morning ${name}`;
  } else if(language === "French") {
    return `Bonjour ${name}`;
  } else if(language === "Japanese") {
    return `Ohayo ${name}`;
  } else {
    return `Selamat Pagi ${name}`;
  }
}

let greetingMessage = greeting("French", "Yusril");
console.log(greetingMessage);

/* Expression Function
function greeting(name, language) {
  if(language === "English") {
    return `Good Morning ${name}!`
  } else if (language === "French") {
    return `Bonjour ${name}!`;
  } else {
    return `Selamat Pagi ${name}!`;
  }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);
*/

// function juga dapat dimanfaatkan sebagai destructuring object
const user = {
  id: 13,
  displayName: 'yusril',
  fullName: 'Muhammad Yusril Nugraha Putra'
}

function introduction({ displayName, fullName}) {
  console.log(`${displayName} is ${fullName}`);
}

introduction(user);
console.log("End of Declaring Function and Expression Function");

/* ================= Default Parameter ================= */
// code syntax Default Paramter
function exponentsFormula(baseNumber, exponent = 2) {     // bisa memberikan value default di parameter yang tidak didefinisikan
  const result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(7);
console.log("End of Default Parameter");

/* ================= Rest Parameter ================= */
// code syntax Rest Paramter

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));
console.log("End of Rest Parameter");

/* ================= Arrow Function ================= */
// code syntax Arrow Function

const sayName = name => {                 // jika fungsi hanya memiliki satu parameter
  console.log(`Name saya ${name}`);
}
sayName("Leia");

const sayHello = () => {                  // jika fungsi sama sekali tidak membutuhkan parameter
  console.log("Selamat pagi semuanya");
}
sayHello();

const sayNameOneLine = name => console.log(`My Name is ${name}`);     // ketika body dari function hanya terdiri dari satu baris
sayNameOneLine("Nadira Veronica Anidya");

const sayHelloOneLine = () => console.log("Selamat pagi semuanya!");     // ketika body dari function hanya terdiri dari satu baris
sayHelloOneLine();

const exponentsFormulaOne = (a, b) => a ** b;                            // ketika body dari function hanya terdiri dari satu baris
console.log(exponentsFormulaOne(3, 3));

/* ================= Closure ================= */
// different closure function with closure return
function init() {
  const name = 'Obi Wan';         // variabel local di dalam scope fungsi init 

  function greet() {           // iner function, merupakan contoh closure
    console.log(`Halo, ${name}`);     // memanggil variabel yang dideklarasikan di parent function
  }

  greet();
}

init();

// code with return function
function initTest() {
  const name = 'Luke Nies';         // variabel local di dalam scope fungsi initTest

  function greet() {
    console.log(`Halo, ${name}`);
  }

  return greet;
}

const myFunction = initTest();
myFunction();

// example declare a function global variable
let counter = 0;

const add = () => {
  return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());
console.log("End of example declare a function global variable");

// example declare closure a function local variable
const addFunction = () => {
  let counter = 0;
    return () => {
      return ++counter;
    };
}

const addCounter = addFunction();
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

console.log("End of example declare a function global variable");
