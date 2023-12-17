/* =========================== Custom Error =========================== */
// code syntax asycnhronous function

console.log("Selamat datang!");

setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);

console.log("Ada yang bisa dibantu?");

function getUsers(isOffline, callback) {        
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

function usersCallback(error, users) {             
  if(error) {
    console.log('proses failed:', error.message);
    return;
  }

  console.log('proses success:', users);
}

getUsers(false, usersCallback);
getUsers(true, usersCallback);
