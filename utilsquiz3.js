function buyTollRoadCard(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(money <= 25) {
        reject(new Error('not enought money to buy card'));
      }

      console.log('buying card');
      resolve({ tollRoadCard: true, balance: money - 25 });
      console.log(`The remaining balance: ${money - 25}`);
    }, 3000);
  });
}

function topUpBalance(card, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(card) {
        console.log('topping up balance');
        resolve({ ...card, balance: card.balance + amount });
        return;
      }

      reject(new Error('card not found'));
    }, 3000);
  });
}

function useTollRoad(card) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(card.balance > 10) {
        console.log('using toll road');
        console.log(card.balance -= 10);
        resolve();
        return;
      }

      reject(new Error('not enough balance'));
    }, 3000);
  });
}

module.exports = ({ buyTollRoadCard, topUpBalance, useTollRoad });