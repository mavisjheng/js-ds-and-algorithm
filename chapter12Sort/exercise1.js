// Run the three algorithms with string data rather than numeric data and compare the running times
function sortArray(length) {
  this.dataStore = ["treasure", "family", "information", "rough", "case", "cite", "fire", "null", "great", "rose",              //1
                    "speech", "the", "brown", "fox", "jumped", "over", "blue", "time", "fly", "form",                           //2
                    "jack", "is", "taller", "than", "mary", "so", "mary", "not", "enumerable", "properties",                    //3
                    "obtain", "keys", "from", "dataStore", "array", "first", "then", "call", "small", "lectronic",              //4
                    "unusually", "or", "comparatively", "large", "in", "size", "dimensions", "things", "persons", "sharing",    //5
                    "particular", "characteristic", "injury", "harm", "that", "reduces", "value", "usefulness", "coarse", "uneven",       //6
                    "surface", "attached", "to", "another", "by", "feelings", "of", "affection", "personal", "regard",          //7
                    "being", "amounting", "nothing", "nil", "lacking", "nonexistent", "quote", "passage", "book", "author",     //8
                    "especially", "authority", "circulating", "medium", "exchange", "knowledge", "communicated", "received", "concerning", "particular",   //9 
                    "fact", "circumstance", "audience", "given", "purpose", "which", "fuel", "other", "material", "ignited",    //10
                    "combined", "oxygen", "prowling", "newsroom", "like", "restless", "coach", "encouraging", "handpicked", "reporters",  //11
                    "editors", "sat", "behind", "glass", "office", "wall", "afforded", "view", "became", "captured",            //12
                    "popular", "imagination", "exploits", "seemed", "straight", "out", "hollywood", "movie", "two", "young",    //13
                    "boldly", "taking", "white", "house", "pursuit", "truth", "spines", "steeled", "courageous", "algorithm",   //14
                    "message", "voters", "receiving", "about", "energy", "environment", "election", "cycle", "depends", "where",//15
                    "live", "kentucky", "west", "virginia", "rely", "jobs", "coal", "industry", "political", "advertisements",  //16
                    "from", "both", "parties", "been", "overwhelmingly", "states", "likely", "battlegrounds", "during", "presidential",    //17
                    "race", "groups", "airing", "anti", "green", "downtown", "streets", "teeming", "restaurants", "music",      //18
                    "clubs", "boutique", "hotels", "sparkling", "buildings", "people", "swirling", "evidence", "transformation", "always", //19
                    "seemed", "something ", "urban", "afterthought", "drop", "regulation", "contended", "critical", "public", "safety",    //20
                    "nineteen", "thousand", "doctor", "nurse", "needed", "make", "dent", "africa", "ebola", "outbreak",         //21
                    "send", "fraction", "united", "vehicles", "help", "effort", "arrived", "burial", "ensure", "infected",      //22
                    "corpses", "spread", "disease", "ground", "clarity", "breach", "fas", "washing", "gains", "decade",         //23
                    "parts", "schools", "shut", "immunization", "campaigns", "suspended", "food", "crisis", "looms", "farmers", //24
                    "abandon", "continue", "reading", "main", "story", "spaniard", "declared", "free", "jumps", "donors",       //25
                    "strengthen", "health", "guinea", "liberia", "sierra", "leone", "center", "aid", "agencies", "active",      //26
                    "train", "improve", "child", "mortality", "rates", "peacekeepers", "shore", "crippling", "little", "value", //27
                    "principal", "source", "revenue", "websites", "mobile", "app", "directory", "internet", "google", "even",   //28
                    "existed", "declining", "importance", "trend", "slowed", "reversed", "tenure", "stock", "tuesday", "driven",//29
                    "stakes", "alibaba", "japan", "currently", "worth", "billion", "taxes", "screen", "bullish", "hedge"];      //30
  
  this.length = length;
  this.toString = toString;
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
  this.insertionSort = insertionSort;
  this.shellSortGapDy = shellSortGapDy;
  this.mergeSort = mergeSort;
  this.mergeArrays = mergeArrays;
  this.quickSort = quickSort;

  function toString() {
    var str = "";
    for (var i = 0; i < this.length; i++) {
      str += this.dataStore[i] + " ";
    }
    return str;
  }

  function bubbleSort() {
    var flag = 1;                                                 
    for (var outer = 0; outer < this.length - 1 && flag; outer++) {          
      flag = 0;
      for (var inner = 0; inner < this.length - 1 - outer; inner++) {           
        if (this.dataStore[inner] > this.dataStore[inner+1]) {            
          var temp = this.dataStore[inner];
          this.dataStore[inner] = this.dataStore[inner+1];
          this.dataStore[inner+1] = temp;
          flag = 1;                                     
        }
      }  
    }
  }
  
  function selectionSort() {
    var minIndex;
    for (var outer = 0; outer < this.length - 1; outer++) {          
      minIndex = outer;                                              
      for (var inner = outer + 1; inner < this.length; inner++) {     
        if (this.dataStore[inner] < this.dataStore[minIndex]) {
          minIndex = inner;
        }
      }
      if (minIndex !== outer) {                                
        var temp = this.dataStore[outer];
        this.dataStore[outer] = this.dataStore[minIndex];
        this.dataStore[minIndex] = temp;
      }
    }
  }
  
  function insertionSort() {
    var temp;
    for (var outer = 1; outer < this.length; outer++) {        
      temp = this.dataStore[outer];
      for (var inner = outer - 1; inner >= 0 && this.dataStore[inner] > temp; inner--) {
        this.dataStore[inner+1] = this.dataStore[inner];
      }
      this.dataStore[inner+1] = temp;
    }
  }
  
  function shellSortGapDy() {
    var temp;
    var gap = parseInt(this.length / 2);    
    for ( ; gap > 0; gap = parseInt(gap / 2)) {            
      for (var i = gap; i < this.length; i++) {             
        temp = this.dataStore[i];
        for (var j = i; j >= gap && temp < this.dataStore[j - gap]; j -= gap) {     
          this.dataStore[j] = this.dataStore[j - gap];
        }
        this.dataStore[j] = temp;
      }
    }
  }
  
  function mergeSort(arr) {
    if (arr.length > 1) {           
      var leftData = [];
      var rightData = [];
      var middle = parseInt(arr.length / 2);
      
      for (var i = 0; i < middle; i++) {
        leftData[i] = arr[i];
      }
      for (var j = middle; j < arr.length; j++) {
        rightData[j - middle] = arr[j];
      }
      
      leftData = mergeSort(leftData);                
      rightData = mergeSort(rightData);             
      return mergeArrays(leftData, rightData);      
    }
    return arr;                    
  }
  
  function mergeArrays(leftData, rightData) {
    var sortedArr = [];
    var leftDataIndex = 0;
    var rightDataIndex = 0;
    
    for (var i = 0; i < leftData.length + rightData.length; i++) {
      if (leftDataIndex === leftData.length) {
        sortedArr.push(rightData[rightDataIndex++]);
      }
      else if (rightDataIndex === rightData.length) {
        sortedArr.push(leftData[leftDataIndex++]);
      }
      else if (leftData[leftDataIndex] < rightData[rightDataIndex]) {
        sortedArr.push(leftData[leftDataIndex++]);
      }
      else {
        sortedArr.push(rightData[rightDataIndex++]);
      }
    }
    return sortedArr;
  }
  
  function quickSort(arr) {
    if (arr.length < 2) {      
      return arr;
    }
    var less = [];
    var greater = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {       
      if (arr[i] < pivot) {                 
        less.push(arr[i]);
      }
      else {
        greater.push(arr[i]);                   
      }
    }
    return quickSort(less).concat(pivot, quickSort(greater));
  }
}

var start, stop, elapsed;
var length = 300;
var words1 = new sortArray(length);
start = new Date().getTime();
words1.bubbleSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Bubble Sort on " + length + " string data elements is: " + elapsed + " milliseconds.");

var start, stop, elapsed;
var length = 300;
var words2 = new sortArray(length);
start = new Date().getTime();
words2.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Selection Sort on " + length + " string data elements is: " + elapsed + " milliseconds.");

var start, stop, elapsed;
var length = 300;
var words3 = new sortArray(length);
start = new Date().getTime();
words3.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Insertion Sort on " + length + " string data elements is: " + elapsed + " milliseconds.");
console.log();

var start, stop, elapsed;
var length = 300;
var words4 = new sortArray(length);
start = new Date().getTime();
words4.shellSortGapDy();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Shell Sort on " + length + " string data elements is: " + elapsed + " milliseconds.");

var start, stop, elapsed;
var length = 300;
var words5 = new sortArray(length);
start = new Date().getTime();
words5.mergeSort(words5.dataStore);
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Merge Sort on " + length + " string data elements is: " + elapsed + " milliseconds.");

var start, stop, elapsed;
var length = 300;
var words6 = new sortArray(length);
start = new Date().getTime();
words6.quickSort(words6.dataStore);
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Quick Sort on " + length + " string data elements is: " + elapsed + " milliseconds.");

