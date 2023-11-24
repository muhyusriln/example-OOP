const countVowels = str => {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("Hello, World!"));

// membuat angka dari 1 sampai 100 ditampung dalam array yang dilakukan dengan for looping dan logika if
const evenNumber = [];
  for (let i=1; i<=100; i++) {
    if (i%2 == 0) {
      evenNumber.push(i);
    }
  }

console.log(evenNumber);

// membuat object dengan nama variabel restaurant
const restaurant = {
  name: "Holland Fried Chicken",
  city: "Ternate",
  favoriteDrink: "teh pucuk",
  favoriteFood: "Ayam geprek",
  isVegan: true
}

console.log(restaurant.name);
console.log(restaurant.favoriteDrink);

// membuat nilai perbandingan dari dua buah variabel dan mengembalikan nilai terkecil
/*
1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */

function minimal(a, b) {
  if(a < b) {
    return a;
  } else if (a == b) {
    return a;
  } else {
    return b;
  }
}

console.log(minimal(5, 2));

function power(a, b) {
  
}