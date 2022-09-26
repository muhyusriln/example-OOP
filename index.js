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

// object created with advanced step
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
    document.getElementById('person').innerHTML = this.identityPerson();
  }
}

const person1 = new Person("Muhammad", "Yusril Nugraha", 23, "freshgraduate");
person1.showName();