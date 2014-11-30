// Fractional Knapsack Problem, use greedy algorithm, 因為物品可被切割，亦即取物時可取部份, 所以要先算出ratio, 從ratio最大的開始拿
// rank items by ratio, value / size
// 若物品的原size放不下背包則取部分(物品可被切割), 取部分時value與size也取部分
function greedyKnapsack(value, size, capacity, quantity) {
  var load = 0;
  var i = 0;
  var maxValue = 0;
  while (load < capacity && i < quantity) {
    if (size[i] <= (capacity - load)) {
      maxValue += value[i];
      load += size[i];
    }
    else {
      var r = (capacity - load) / size[i];
      maxValue += r * value[i];
      load += r * size[i];
    }
    i++;
  }
  return maxValue;
}

var value = [50, 140, 60, 60];
var size = [5, 20, 10, 12];
var ratio = [10, 7, 6, 5];
var capacity = 30;
var quantity = 4;
console.log("maximum value: " + greedyKnapsack(value, size, capacity, quantity));

