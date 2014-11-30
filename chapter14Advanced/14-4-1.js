// coin-change problem
// greedy algorithm: always choose the best solution at the time, with no regard to how that choice will affect future choices
// 盡量避免使用面額有小數點的(ex: 美金)，javascript會有小數點的誤差造成結果錯誤
function coinChange(amount, coins) {
  if (amount % 50 < amount) {
    coins[3] =  parseInt(amount / 50);
    amount = amount % 50;
  }
  if (amount % 10 < amount) {
    coins[2] = parseInt(amount / 10);
    amount = amount % 10;
  }
  if (amount % 5 < amount) {
    coins[1] = parseInt(amount / 5);
    amount = amount % 5;
  }
  coins[0] = parseInt(amount / 1);
}

function showChange(coins) {
  console.log("Total Amount is: " + amount);
  console.log("Number of quarters - " + coins[3] + " - " + coins[3] * 50);
  console.log("Number of dimes - " + coins[2] + " - " + coins[2] * 10);
  console.log("Number of nickels - " + coins[1] + " - " + coins[1] * 5);
  console.log("Number of pennies - " + coins[0] + " - " + coins[0] * 1);
}

var amount = 736;
var coins = [];
coinChange(amount, coins);
showChange(coins);

