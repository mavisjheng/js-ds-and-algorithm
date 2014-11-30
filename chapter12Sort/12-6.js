// merge sort: merging sorted sublists to gether to form a larger, completely sorted list, Divide and Conquer
// 1.將陣列分割直到只有一個元素。 2.開始兩兩合併，每次合併同時進行排序，合併出排序過的陣列。 3.重複2.的動作直到全部合併完成。
// mergeSort(): 遞迴地將數列對分成左子數列、右子數列，直到左子數列、右子數列被分割成只剩一個元素為止，對回傳的左子數列、右子數列依大小排列合併(call mergeArrays())
// mergeArrays(): 將左子數列及右子數列依大小順序合併成一個新的數列
// create other arrays to store leftData and rightData, not in-place
function sortArray(length) {
  this.dataStore = [];
  this.length = length;
  this.setData = setData;
  this.toString = toString;
  this.mergeSort = mergeSort;
  this.mergeArrays = mergeArrays;
  
  for (var i = 0; i < this.length; i++) {
    this.dataStore[i] = i;
  }
  
  function setData() {
    for (var i = 0; i < this.length; i++) {
      this.dataStore[i] = Math.floor(Math.random() * 100);            
      // this.dataStore[i] = Math.floor(Math.random() * (this.length + 1));
    }
  }
  
  function toString() {
    var str = "";
    for (var i = 0; i < this.length; i++) {
      str += this.dataStore[i] + " ";
    }
    return str;
  }
  
  function mergeSort(arr) {
    if (arr.length > 1) {           // 如果資料超過1筆	
      var leftData = [];
      var rightData = [];
      var middle = parseInt(arr.length / 2);
      
      // 將資料分割成左右子串列
      for (var i = 0; i < middle; i++) {
        leftData[i] = arr[i];
      }
      for (var j = middle; j < arr.length; j++) {
        rightData[j - middle] = arr[j];
      }
      
      // 遞迴地將數列對分至只剩一個元素為止並做合併排序
      leftData = mergeSort(leftData);                // 遞迴地對左子串列作合併排序
      rightData = mergeSort(rightData);              // 遞迴地對右子串列作合併排序
      return mergeArrays(leftData, rightData);       // 將左右子串列作完合併的結果合併
    }
    return arr;                      // 如果資料只有1筆,直接回傳
  }
  
  // 此時左右子串列已經各自被排序好了, 所以只需比較左右子串列內的數值大小，不用擔心串列本身還沒排好
  function mergeArrays(leftData, rightData) {
    var sortedArr = [];
    var leftDataIndex = 0;
    var rightDataIndex = 0;
    
    // 一一比對leftData和rightData中每個元素的大小，將較小值者依序填入sortedData
    for (var i = 0; i < leftData.length + rightData.length; i++) {
      // 如果leftData已被填完, 就填入rightData的資料
      if (leftDataIndex === leftData.length) {
        sortedArr.push(rightData[rightDataIndex++]);
      }
      // 如果rightData已被填完, 就填入leftData的資料
      else if (rightDataIndex === rightData.length) {
        sortedArr.push(leftData[leftDataIndex++]);
      }
      // 如果leftData < rightData,則填入leftData的資料
      else if (leftData[leftDataIndex] < rightData[rightDataIndex]) {
        sortedArr.push(leftData[leftDataIndex++]);
      }
      else {
        sortedArr.push(rightData[rightDataIndex++]);
      }
    }
    return sortedArr;
  }
}

var nums = new sortArray(15);
nums.setData();
console.log("Original Array: " + nums.toString());
console.log("Merge Sort:");
console.log(nums.mergeSort(nums.dataStore));

