function myFunction() {
  document.getElementById("inBetweenHead").innerHTML = "Paragraph changed.";
}

document.getElementById('firstText').innerHTML = "My First Web Page";

let x = 2 + 3 + "5";
document.getElementById('addingNumber').innerHTML = x;

// create an Array
const cars = ["Saab", "Volvo", "BMW"];
// change an element
cars[0] = "Toyota";
// add an element
cars.push("Audi");
// display the Array
document.getElementById('dataCar').innerHTML = cars;

// create an object
const car = {
  type: "Fiat",
  model: "500",
  weight: "850kg",
  color: "White"
};

// change a property
car.color = "Blue";
// add a property
car.owner = "Yusril"
// display the property
document.getElementById('objectArray').innerHTML = "Car owner is " + car.owner;

function myFunction(p1, p2) {
  return p1 * p2;
}
document.getElementById('multipleNumber').innerHTML = myFunction(10, 20);

// object simple
const Person2 = {
  firstName: "Lugie",
  lastName: "Ahmad",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
document.getElementById('person2').innerHTML = Person2.fullName();

// object advanced
function Person(firstName, lastName, age, status) {
  // property
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age,
  this.status = status

  // method
  this.fullName = function() {
    return `${this.firstName} ${this.lastName}`
  }

  this.identityPerson = function() {
    return `${this.firstName} ${this.lastName} is 
    ${this.age} years old, status as a ${this.status}`;
    // return this.fullName + " is " + this.age + " years old " + " status as a " + this.status;
  }
  this.showName = function() {
    document.getElementById('person1').innerHTML = this.identityPerson();
  }
}

const person1 = new Person("Muhammad", "Yusril Nugraha", 23, "freshgraduate");
person1.showName();

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById('string').innerHTML = text.length;

// jika ingin mengambil dari string ke-7 sampai dengan selanjutnya maka codenya => str.slice(7, 13)
// substr() is similar to slice(), tetapi pada substr() method nya berupa -> substr(parameter, length)
let str = "Apple, Banana, Kiwi";
document.getElementById('stringSlice').innerHTML = str.slice(7, 13);

// the replace() method replaces a specified value with another value in a string
// by default, the replace() method is case sensitive. Writing CHERRY (with upper-case) will not work
document.getElementById('stringReplace').innerHTML = str.replace("Kiwi", "Cherry");

// to replace all matches, use a regular expression with a /g flag (global match)
// example: text.replace(/P3nGG!4TC0d3/g, "Penggiat Code");
function replaceClick() {
  let text = document.getElementById('strReplaceClick').innerHTML;
  document.getElementById('strReplaceClick').innerHTML = text.replace("P3nGG!4TC0d3", "Penggiat Code");
}

function toUpperCase() {
  let text = document.getElementById('strToUpperCase').innerHTML;
  document.getElementById('strToUpperCase').innerHTML = text.toUpperCase();
}








