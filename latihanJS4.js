/* =========================== Paradigma Functional Programming =========================== */
// code syntax Functional

// Contoh kode gaya penulisan kode imperatif.
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];
for(let i = 0; i<names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

const names1 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark1 = names1.map((name) => `${name}!`);
console.log(newNamesWithExcMark);

/* Terdapat 4 konsep dari pembahasan ParadigmaFunctional Programming */

/* =========================== Pure Function =========================== */
// example pure function hitung luas lingkaran
const areaOfCircleCount = (jariJari) => {
  return 3.14 * (jariJari * jariJari);
}

console.log(`Nilai PI = 3.14`);
console.log(`Luas lingkaran dengan jari-jari 5cm = ${areaOfCircleCount(5)} cm`);
console.log(`Luas lingkaran dengan jari-jari 5cm = ${areaOfCircleCount(5)} cm`);
console.log(`Luas lingkaran dengan jari-jari 8cm = ${areaOfCircleCount(8)} cm`);
console.log(`Luas lingkaran dengan jari-jari 9cm = ${areaOfCircleCount(9)} cm`);

// example impure function & pure function tambah data person dengan umur
// pure function
const createPersonWithAge = (age, person) => {
  return {...person, age};
};

const person = {
  name: 'Bobo'
};

const newPerson = createPersonWithAge(30, person);

console.log({person, newPerson});

// impure function
const createPersonWithAge1 = (age1, person1) => {
  person1.age1 = age1;
  return person1;
}
const person1 = {
  name: 'Sandi'
};
const newperson1 = createPersonWithAge1(23, person1);

console.log({person1, newperson1});

/* =========================== rekursif yang ada di functional programming =========================== */
/* example rekursif bukan di function programming
const countDown = number => {
  do{
    console.log(number);
    number -=1;
  }
  while(number > 5);
}
countDown(10);
*/

// example rekursif di function programming
const countDown = number => {
  console.log(number);
  if(number > 0) countDown(number -1);
}

countDown(10);

/* =========================== Immutability =========================== */
// code syntax Immutability
// example muttable
const user = {
  firstName: 'Harry',
  lastName: 'Prottter'
}

const renameLastNameUser = (newLastName, user) => {
  user.lastName = newLastName;
}

renameLastNameUser('Potter', user);
console.log(user);

// example immutable
const createUserWithNewLastName = (newLastName, user) => {
  return {...user, lastName: newLastName}
}

const newUser = createUserWithNewLastName('Potter', user);
console.log(newUser);

/* =========================== High-Order Function =========================== */
// code syntax High-Order Function
const hello = () => {
  console.log('Hello Yusril!');
}

const say = (someFunction) => {
  someFunction();
}

const sayHello = () => {
  return () => {
    console.log('Hello World!');
  }
}

hello();
say(hello);
sayHello()();

// code syntax Reusable Function
const newArray = ['Harry', 'Ron', 'Jefry', 'Felix', 'Kale', 'Thomas'].map((name) => { return `${name}!`});
console.log(newArray);

const truthyArray = ['Harry', 0, null, false, true, 193, 0.4739, undefined].filter((value) => { return value});
console.log(truthyArray);

const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);
console.log(even);

const months = ['March', 'Jan', 'Feb', 'Des'];
months.sort();
console.log(months);

// fungsi sort untuk mengurutkan
const array1 = [1, 30, 4, 101, 1000, 121, -42];
array1.sort();
console.log(array1);

// fungsi sort dibuat urut dari terkecil sampai terbesar
const compareNumber = (a, b) => {
  return a - b;
}
const array2 = [1, 30, 4, 700, 54, 101, 203, 2500];
const sorting = array2.sort(compareNumber);
console.log(sorting);

// fungsi every
const scores = [70, 85, 90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

// fungsi ForEach
const names2 = ['Yusril', 'Rizki', 'Isnu', 'Jalu', 'Teguh', 'Henry'];

names2.forEach((name) => {
  console.log(`Hello, ${name}!`);
});

