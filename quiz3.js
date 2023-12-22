const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utilsquiz3.js');

async function getTollAccess(money) {
  try {
    const card = await buyTollRoadCard(money);
    const amount = await topUpBalance(card);
    const accessed = await useTollRoad(amount);
  
    return accessed;

  } catch(err) {
    throw err;
  }
}

getTollAccess(100)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));