/* ================= Object ================= */
// object initiation
const user = {
  name: "M. Yusril Nugraha Putra",
  age: 23,
  species: "Human",
  isJedi: true,
  "address": "Mangga Dua"     // inisiasi properti dan value dengan tanda kurung siku
}

console.log(`Halo, nama saya ${user.name}, umur saya ${user.age} tahun`);
console.log(`Alamat saya di ${user["address"]}`);

const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 200,
  color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 300;
// ketika properti dengan nama key yang ditentukan tidak ditemukan, maka properti baru akan ditambahkan ke object. contoh:
spaceship.class = "Light freighter";
// Kita juga dapat menghapus property pada object menggunakan keyword delete seperti berikut:
delete spaceship.manufacturer;
console.log(spaceship);
console.log("End of Object");

/* ================= Array ================= */
// array initiation
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);     // mengakses nilai di dalam array
console.log(myArray[1]);    // mengakses nilai array pada index 1
console.log(`Panjang nilai myArray adalah ${myArray.length}.`); // mengakses panjang array
myArray.push('JavaScript');     // menambahkan data ke dalam array
console.log(myArray);
myArray.pop();                  // menghapus data terakhir
console.log(myArray);
myArray.shift();                // menghapus data pertama
console.log(myArray);
myArray.unshift("Apple");       // menambahkan data pertama
console.log(myArray);
delete myArray[1];              // meghapus data dari array
console.log(myArray);

const Array = ["Cokelat", 42.5, 22, true, "Programming"];
Array.splice(2, 1);           // menghapus data pada index 2 sebanyak 1 elemen
console.log(Array);

const month = ['January', 'March', 'April', 'May'];
console.log('before splice: ', month);

month.splice(1, 0, 'February');
console.log('after splice: ', month);
console.log("End of Array");

/* ================= Spread Operator ================= */
// spread operator
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(...favorites);
const others = ["Cake", "Pie", "Donut"];
console.log(...others);

const allFood = [...favorites, ...others];
console.log(allFood);

const obj1 = {firstName: 'Obi-Wan', age: 30};
const obj2 = {lastName: 'Kenobi', gender: 'M'};


const newObj = {...obj1, ...obj2};
console.log(newObj);
console.log("End of Spread Operator");

/* ================= Destructuring Object ================= */
// code syntax destructuring object
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  address: "Mangga Dua",
  passion: "Coding"
  
}
// isMale default value is undefined
const { firstName, lastName, age, address, passion, isMale } = profile;
console.log(firstName, lastName, age, address, passion, isMale);

// example assigning to different Local Variable Names
const profileYusril = {
  firstName: "Muhammad Yusril",
  lastName: "Nugraha Putra",
  age: 23,
  address: "Jl. Jati Lurus, Mangga Dua",
  hobby: "Sport"
}

const { firstName: localFirstName, lastName: localLastName, age: localAge} = profileYusril;
console.log(localFirstName, localLastName, localAge);
console.log(localLastName);
console.log(localAge);
console.log("End of Desctructuring Object");

/* ================= Destructuring Array ================= */
// code syntax destructuring array
const favoritesFood = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favoritesFood;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

// example for destructuring assignment array
let a = 5;
let b = 8;

console.log("sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a];            // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a

console.log("setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
console.log("End of Destructuring Array");

/* ================= Map ================= */

const myMap = new Map([
  ['1', 'a string key', true, 12],
  [1, 'a number key'],
  [true, true]
]);

console.log(myMap);

const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokya", "Japan"]
]);

console.log(capital.get("London"));
console.log(capital.set("New Delhi", "India"));
console.log(capital.size);
console.log(capital.get("New Delhi"));

const wrongMap = new Map();
wrongMap["My Key"] = "My Value";

console.log(wrongMap.has("My Key"));
console.log(wrongMap.has("My Key"));
console.log("End of Map");

/* ================= Set ================= */
// example set
const numberSet = new Set([1, 4, 6, 5, 4, 1]);
numberSet.add(10);        // menambahkan data set 
numberSet.add(7);
numberSet.add(2);
numberSet.delete(1);      // menghapus data set
console.log(numberSet);

/* ================= Map =================
const visitCountMap = new Map();            // menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas", age: 30, hobby: "Coding" };
countUser(jonas);             // menambahkan user "Jonas"

jonas = null;         // data objek "jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(visitsCountMap);
}, 5000);

*/

const { inspect } = require('util');

const visitCountMap = new WeakMap();        // menyimpan daftar user

function countUser(user) {
  let count = visitCountMap.get(user) || 0;
  visitCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);

jonas = null;

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(inspect(visitCountMap, {showHidden: true}));
}, 5000);













