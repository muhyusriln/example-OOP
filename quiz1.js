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
console.log(restaurant.favoriteDrink)