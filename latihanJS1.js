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
const favorite = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(...favorite);
const others = ["Cake", "Pie", "Donut"];
console.log(...others);
const allFood = [...favorite, ...others];
console.log(allFood);








