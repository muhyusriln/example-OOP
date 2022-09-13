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
  color: "White"
};

// change a property
car.color = "Blue";
// add a property
car.owner = "Yusril"
// display the property
document.getElementById('objectArray').innerHTML = "Car owner is " + car.owner;
