// using greedy algorithm for coin changing, but not allowing to use dimes, find the solution for 30 cents. Is this solution optimal?
function coinChange(amount, coins) {
  if (amount % 25 < amount) {
    coins[3] =  parseInt(amount / 25);
    amount = amount % 25;
  }
  if (amount % 5 < amount) {
    coins[1] = parseInt(amount / 5);
    amount = amount % 5;
  }
  coins[0] = parseInt(amount / 1);
}

function showChange(coins) {
  console.log("Total Amount is: " + amount);
  console.log("Number of quarters - " + coins[3] + " - " + coins[3] * 25);
  console.log("Number of nickels - " + coins[1] + " - " + coins[1] * 5);
  console.log("Number of pennies - " + coins[0] + " - " + coins[0] * 1);
}

var amount = 30;
var coins = [];
coinChange(amount, coins);
showChange(coins);

