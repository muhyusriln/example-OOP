/* =========================== Asynchronous function promise callback =========================== */
// code syntax asynchronous handling dengan promise
const fs = require('fs');                               // menggunakan function node.js read file .txt
const { promisify } = require('util');                  // menggunakan function node.js promisify

function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["Zaki", "Husnul", "Fajri", "Khoirul"];
    if(isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

const getUsersPromise = promisify(getUsers);

getUsersPromise(true)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));        // cannot retrieve users due offline
getUsersPromise(false)
  .then(users => console.log(users))             // [Zaki, Husnul, Fajri, Khoirul]
  .catch(err => console.log(err.message));

// code read file menggunakan promisify
const readFilePromise = promisify(fs.readFile);

// output data dari berkas dataJS7.txt
readFilePromise('./dataJS7.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.log(err.message));

function getProvinces(countryId, callback) {
  // simulate network delay
  setTimeout(() => {
    if(countryId === 'id') {
      callback(null, [
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten'},
        { id: 'id-jr', name: 'Jawa Barat'}
      ]);
      return;
    }

    callback(new Error('country not found'), null);
  }, 2000);
}

const getProvincesPromise = promisify(getProvinces);

getProvincesPromise('id')
  .then(provinces => console.log(provinces))
  .catch(err => console.log(err.message));
// getProvincesPromise(true)
//   .then(provinces => console.log(provinces))
//   .catch(err => console.log(err.message));

/* =========================== Asynchronous promise berantai =========================== */
// code syntax asynchronous promise berantai

function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(amount > 100) {
        reject(new Error('not enought money to withdraw'));
      }
        resolve(amount);
    }, 5000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(money < 35) {
        reject(new Error('not enought money to buy ticket'));
      }
        resolve('cinema ticket');
    }, 5000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!ticket) {
        reject(new Error('no tiket'));
      }
      resolve('enjoy the movie');
    }, 5000);
  });
}

function watchMovie() {
  withDrawMoney(50)
    .then((money) => buyCinemaTicket(money))
    .then((ticket) => goInsideCinema(ticket))
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
}

watchMovie();

// membuat fungsi untuk menghasilkan output dari semua proses
// function watchMovie() {
//   withDrawMoney(20)
//     .then((money) => {
//       return buyCinemaTicket(money);
//     })
//     .then((ticket) => {
//       return goInsideCinema(ticket);
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// }

// code syntax asynchronous promise.all()

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.all() untuk mengeksekusi ketiga promise tersebut secara paralel
Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message));

// Promise.race() mengeluarkan output yang paling cepat penyelesaiannya
Promise.race([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message));

// Promise.allSettled() mengembalikan array of object dengan status resolved atau rejected
Promise.allSettled([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((result) => console.log(result));

// fulfilled sample
const promiseResolve1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promiseResolve2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promiseResolve3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('3')), 3000));
//
Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// async function watchMovie() {
//   try {
//     const money = await withDrawMoney(50);
//     const ticket = await buyCinemaTicket(money);
//     const result = await goInideCinema(ticket);

//     console.log(result);
//   } catch(error) {
//     console.log(error.message);
//   }
// }

// watchMovie().then(() => console.log('done'));
