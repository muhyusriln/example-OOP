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



