const { withDrawMoney, buyCinemaTicket, goInsideCinema } = require('./utilsJS8.js');

async function watchMovie(amount) {
  try {
    const money = await withDrawMoney(amount);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);
    
    return result;
  } catch(err) {
    throw(err);
  }
}

watchMovie(10)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));        // not enought money to buy ticket
watchMovie(50)
  .then((result) => console.log(result))            // enjoy the movie
  .catch((err) => console.log(err.message));