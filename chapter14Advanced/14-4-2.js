// 計算一共換了幾個硬幣, 面額由大到小排列，此寫法不會計算每種面額各換了幾個
var denomination = [50, 10, 5, 1];
function coinChange(amount) {
  var coins = 0;
  for (var i = 0; i < denomination.length; i++) {
    while (amount >= denomination[i]) {
      amount -= denomination[i];
      coins++;
    }
  }
  return coins;
}

var amount = 1314;
console.log("Number of coins for changing " + amount + ": " + coinChange(amount));

