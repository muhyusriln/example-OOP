// const {coffeeStock, isCoffeeMachineReady} = require('./state');  // cara import state.js dengan 2 object
import { coffeeStock as stock, isCoffeeMachineReady} from './state.js';

// membuat fungsi membuat kopi
/*
const makeCoffee = (type, miligrams) => {
  if(coffeeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji Kopi habis!");
  }
}

makeCoffee("robusta", 80);
*/

// console.log(coffeeStock);
console.log(stock);
console.log(isCoffeeMachineReady);

// const displayStock = stock => {
//   for(const type in stock) {
//     console.log(type);
//   }
// }

// displayStock(coffeeStock);










