import _ from 'lodash';

const myArray = [1, 2, 3, 4, 5];
let sum = 0;

for(let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}

// dengan menggunakan fungsi reduce
let sum1= myArray.reduce((prev, curr) => {
  return prev + curr
});

// Dengan lodash, kita dapat meringkas kode menjadi seperti ini:
const sum2 = _.sum(myArray);

console.log(sum2);

console.log(sum1);

console.log(sum);