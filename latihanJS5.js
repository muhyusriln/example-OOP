/* =========================== Penanganan Error =========================== */
// code syntax penanganan error
try {
  console.log("Awal block try");
  // errorCode;        // jika terjadi error
  console.log("Akhir block try");
}
catch(error) {
  console.log("Terjadi error");
  // cara penangan error dengan menggunakan object error
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  console.log("Akan tetap dieksekusi");
}

/* =========================== Throwing Errors =========================== */
// code syntax used throwing error
// const myError = new Error("Ini adalah error saya");
// throw myError;
const getEvenNumber = (array) => {
  console.log(typeof array);
  if(!(typeof array === 'object')) {
    throw new Error('Parameter array haruslah sebuah object (array).');
  }
  if(!Array.isArray(array)) {
    throw new Error('Parameter array haruslah sebuah array.');
  }
  const filteredArray = array.filter((item) => {
    return item % 2 === 0;
  });
  return filteredArray;
}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];            // array type datanya adalah object
console.log(getEvenNumber({satu: 1, dua: 2, tiga: 3, empat: 4}));

const json = '{"name": "John Doe", "age": 25 }';          // parsing dari variabel json (string) menjadi sebuah object
// const json = '{ "age": 25 }';          // contoh variabel name tidak diinisiasikan
// const json = '{ bad json }';       // contoh wrong code syntax

try {
  const user = JSON.parse(json);

  if(!user.name) {
    throw new SyntaxError("'name' is required.");
  }
  // errorCode;

  console.log(user.name);
  console.log(user.age);
} catch(error) {
  // Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi. 
  //Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
  if(error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);  
  } else if(error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }

  // console.log(error.name);
  // console.log(error.message);
  // console.log(`JSON Error: ${error.message}`);
}


/* =========================== Custom Error =========================== */
// code syntax used class validation
class validationError extends Error {
  constructor(message) {
    super(message);
    this.name = "validationError";
  }
}

// const json1 = '{"merk": "iphone", "type": 15, "realease_year": 2023 }';
const json1 = '{ "type": 15, "realease_year": 2023 }';

try {
  const smartphone = JSON.parse(json1);

  if(!smartphone.merk) {
    throw new validationError("'merk' is required");
  } 
  if(!smartphone.type) {
    throw new validationError("'type' is required") ;
  }

  console.log(smartphone.merk);
  console.log(smartphone.type);
  
} catch(error) {
  if(error instanceof SyntaxError) {
    console.log(`JSON syntax error: ${error.message}`);
  } else if(error instanceof validationError) {
    console.log(`Invalid data: ${error.message}`);
  } else if(error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
