// 0/1 Knapsack Problem, items differ in both size and value, maximize your take by filling the backpack with those items that are worth the most
// use dynamic programming, 物品不可被切割，亦即取物時得取全部, 從value最大的開始拿, 因為不可被切割
// 對某一件物品來說，可以選擇放或不放：物品若不放進背包，背包價值不變耐重不變，移去這件物品；物品若放進背包，背包價值上升耐重下降，移去這件物品
// dynaKnapsack: 在每個不同的capacity與quantity下，計算每個情況的max value, use array to store temporary solutions until get the final solution

function max(a, b) {
  return (a > b) ? a : b;
}

// 1.recursion
function recurKnapsack(capacity, quantity) {          // quantity 為物品數量
  if (capacity === 0 || quantity === 0) {
    return 0;
  }
  if (size[quantity - 1] > capacity) {                // 當物品的size > capacity, 背包裝不下，移去這件物品
    return recurKnapsack(capacity, quantity - 1);
  }
  else {                                              // 裝得下時可以選擇放或不放，max(放此物可得的value, 不放此物可得的value)
    return max(value[quantity - 1] + recurKnapsack(capacity - size[quantity - 1], quantity - 1), recurKnapsack(capacity, quantity - 1));  
  }
}

// 2.dynamic programming, 寫法意思等同上面，只是這邊用array的row, column代表capacity跟quantity來紀錄各個subsolution
function dynaKnapsack(capacity, quantity) {
  var K = [];
  var str = "";                                       // 為了印出結果array
  for (var i = 0; i <= capacity; i++) {
    K[i] = [];
  }
  
  for (var quan = 0; quan <= quantity; quan++) {
    for (var capa = 0; capa <= capacity; capa++) {
      if (quan === 0 || capa === 0) {            
        K[quan][capa] = 0;
      }
      else if (size[quan - 1] <= capa) {             // 裝得下時可以選擇放或不放，max(放此物可得的value, 不放此物可得的value)
        K[quan][capa] = max(value[quan - 1] + K[quan - 1][capa - size[quan - 1]], K[quan - 1][capa]);        
      }
      else {                                         // 當物品的size > capacity, 無法放進背包，移去這件物品
        K[quan][capa] = K[quan - 1][capa];
      }
      str += K[quan][capa] + " ";
    }
    str += "\n";                                     // change to new line
  }
  console.log(str);
  return K[quantity][capacity];
}

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var quantity = 5;
console.log(recurKnapsack(capacity, quantity));
console.log();
console.log(dynaKnapsack(capacity, quantity));

