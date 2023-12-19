async function watchMovie() {
  try {
    const money = await withDrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInideCinema(ticket);

    console.log(result);
  } catch(error) {
    console.log(error.message);
  }
}

watchMovie().then(() => console.log('done'));