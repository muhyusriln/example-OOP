/* =========================== Asynchronous function =========================== */
// code syntax asynchronous function

console.log("Selamat datang!");

setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);

console.log("Ada yang bisa dibantu?");

function getUsers(isOffline, callback) {        // syntax secara default asycnhronous 1 parameter getUsers(callback)
  // simulasi network delay
  setTimeout(() => {
    const users = ["Haris", "Budi", "Setiawan", "Sukri"];

    if(isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }

    callback(null, users);
  }, 5000);
}

// pengganti callback yang dibuat fungsi
// getUsers((users) => {
//   console.log(users);
// })

function usersCallback(error, users) {             // syntax secara default callback asycnhronous 1 parameter usersCallback(users)
  if(error) {
    console.log('proses failed:', error.message);
    return;
  }

  console.log('proses success:', users);
}

getUsers(false, usersCallback);
getUsers(true, usersCallback);

/* =========================== Asynchronous function =========================== */
// code syntax asynchronous handling dengan promise

function getUsers1(isOffline) {
  // return a promise object
  return new Promise((resolve, reject) => {

    // simulate network delay
    setTimeout(() => {
      const users = ["Zaki", "Husnul", "Fajri", "Khoirul"];

      if(isOffline) {
        reject(new Error('cannot retrieve users due offline'));
      }

      resolve(users);
    }, 7000);

  });
}

