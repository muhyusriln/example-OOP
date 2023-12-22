function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(amount > 100) {
        reject(new Error('Not enought money to withdraw'));
      }
      resolve(amount);
    }, 3000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(money < 20) {
        reject(new Error('Not enought money to buy ticket'));
      }
      resolve('cinema ticket');
    }, 3000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!ticket) {
        reject(new Error('No ticket'));
      }
      resolve('Enjoy the movie');
    }, 3000);
  });
}

module.exports = { withDrawMoney, buyCinemaTicket, goInsideCinema };