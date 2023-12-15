/* penggunaan filter untuk menyaring array dari objek siswa yang layak mendapatkan beasiswa 
* berdasarkan nilai skor yang didapat.
*/
// data nilai siswa
const student = [
  {
    name: 'John',
    score: 75
  },
  {
    name: 'Jane',
    score: 70
  },
  {
    name: 'Bob',
    score: 85
  },
  {
    name: 'Haris',
    score: 60
  },
  {
    name: 'Yusril',
    score: 85
  },
  {
    name: 'Teguh',
    score: 80
  },
  {
    name: 'Isnu',
    score: 70
  },
  {
    name: 'Jalu',
    score: 75
  }
];

// penerapan fungsi array filter
const scholarshipStudent = student.filter((student) => student.score >= 75);
console.log(scholarshipStudent);

// penerapan fungsi array reduce
const totalScore = student.reduce((total, student) => total + student.score, 0);
console.log(totalScore);

/**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */

const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

const greatAuthors = books.filter((book) => book.sales > 1000000).map((book) => {
  //return `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`;
  return book.sales;
});

console.log(greatAuthors);

/**
 * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
 * mendeteksi jenis segitiga berdasarkan nilai argumen.
 * Contoh:
 *  - 1, 1, 1 -> Segitiga sama sisi
 *  - 4, 4, 2 -> Segitiga sama kaki
 *  - 3, 4, 6 -> Segitiga sembarang
 *
 * Namun fungsi detectTriangle belum berjalan dengan baik karena
 * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
 * Contoh:
 *  - 1, false, 1 -> Segitiga sembarang
 *  - 'a', 3, 5 -> Segitiga sembarang
 *  - 12, 2, null -> Segitiga sembarang
 * Kondisi yang diharapkan:
 *  - 1, false, 1 -> Argumen kedua harus number
 *  - 'a', 3, 5 -> Argumen pertama harus number
 *  - 12, 2, null -> Argumen ketiga harus number
 *
 *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
 *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
 *
 * TODO 1:
 * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
 *   - Turunan dari class Error
 *   - Memiliki constructor(message)
 *   - this.name harus bernilai "ValidationError"
 *
 * TODO 2:
 * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
 *   - Menerima 3 argumen
 *   - Bila argumen pertama bukan number:
 *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
 *   - Bila argumen kedua bukan number:
 *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
 *   - Bila argumen ketiga bukan number:
 *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
 *
 * TODO 3:
 * - Panggil fungsi validateNumberInput di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
 *   - pastikan Anda memanggil validateNumberInput menggunakan try .. catch.
 *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateNumberInput.
 */
let x = 1;
console.log(typeof x);
let y = "yusril";
console.log(typeof y);
let z = "number";
console.log(typeof z);

if(x !== z) {
  console.log("benar, ini tidak sesuai value dan tipe datanya");
} else {
  console.log("salah, ini sesuai value dan tipe datanya");

}

// TODO 1
class ValidationError extends Error {
	constructor(message) {
	super(message);
    this.name = "ValidationError";
	}
}

// TODO 2
const validateNumberInput = (a, b, c) => {
  if(typeof a !== "number") {
  throw new ValidationError("Argumen pertama harus number");
  } else if(typeof b !== "number") {
    throw new ValidationError("Argumen kedua harus number");
  } else if(typeof c !== "number") {
    throw new ValidationError("Argumen ketiga harus number");
  }
}


const detectTriangle = (a, b, c) => {
  // TODO 3
  try {
    validateNumberInput(a, b, c);
  }catch(error) {
    if(error instanceof ValidationError) {
      console.log(error.message);
    }
  }
  if (a === b && b === c) {
    return 'Segitiga sama sisi';
  }

  if (a === b || a === c || b === c) {
    return 'Segitiga sama kaki';
  }

  return 'Segitiga sembarang';
};
console.log(detectTriangle("usfig", 3, 7));
