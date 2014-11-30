// search textual data with both search algorithms and time them to compare
// mathematically proven that binary search is faster than sequential search on large data sets 
// because binary search eliminates half the search space with each iteration of the loop
var arr = ["the", "nationalism", "of", "hamilton", "was", "undemocratic", "the", "democracy", "of", "jefferson", "was",
           "in", "the", "beginning", "provincial", "the", "historic", "mission", "of", "uniting", "nationalism", "and",
           "democracy", "was", "in", "the", "course", "of", "time", "given", "to", "new", "leaders", "from", "a", "region",
           "beyond", "the", "mountains", "peopled", "by", "men", "and", "women", "from", "all", "sections", "and", "free",
           "from", "those", "state", "traditions", "which", "ran", "back", "to", "the", "early", "days", "of", "colonization",
           "the", "voice", "of", "the", "democratic", "nationalism", "nourished", "in", "the", "west", "was", "heard", "when",
           "clay", "of", "kentucky", "advocated", "his", "american", "system", "of", "protection", "for", "industries", "when",
           "jackson", "of", "tennessee", "condemned", "nullification", "in", "a", "ringing", "proclamation", "that", "has", "taken",
           "its", "place", "among", "the", "great", "american", "state", "papers", "and", "when", "lincoln", "of", "illinois", "in",
           "a", "fateful", "hour", "called", "upon", "a", "bewildered", "people", "to", "meet", "the", "supreme", "test", "whether",
           "this", "was", "a", "nation", "destined", "to", "survive", "or", "to", "perish", "and", "it", "will", "be", "remembered",
           "that", "lincoln", "party", "chose", "for", "its", "banner", "that", "earlier", "device", "republican", "which", "jefferson",
           "had", "made", "a", "sign", "of", "power", "the", "rail", "splitter", "from", "illinois", "united", "the", "nationalism", "of",
           "hamilton", "with", "the", "democracy", "of", "jefferson", "and", "his", "appeal", "was", "clothed", "in", "the", "simple",
           "language", "of", "the", "people", "not", "in", "the", "sonorous", "rhetoric", "which", "webster", "learned", "in", "the", "schools"];

  
function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === data) {
      return i;
    }
  }
  return -1;
}

function binSearch(arr, data) {
  var lowerBound = 0;
  var upperBound =arr.length - 1;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((lowerBound + upperBound) / 2);
    if (arr[mid] > data) {
      upperBound = mid - 1;
    }
    else if (arr[mid] < data) {
      lowerBound = mid + 1;
    }
    else {
      return mid;           // found position
    }
  }
  return -1;
}

function insertionSort(arr) {
  var temp;
  for (var outer = 1; outer < arr.length; outer++) {        
    temp = arr[outer];
    for (var j = outer - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
}

var start, stop, elapsed;
var word = "rhetoric";
start = new Date().getTime();
var pos = seqSearch(arr, word);
stop = new Date().getTime();
elapsed = stop - start;
if (pos >= 0) {
   console.log("Found " + word + " at position " + pos);
   console.log("Sequential search took " + elapsed + " milliseconds");
}
else {
   console.log(word + " is not in the list");
}
console.log();

var start, stop, elapsed;
var word = "rhetoric";
insertionSort(arr);
start = new Date().getTime();
var pos = binSearch(arr, word);
stop = new Date().getTime();
elapsed = stop - start;
if (pos >= 0) {
    console.log("Found " + word + " at position " + pos);
    console.log("Binary search took " + elapsed + " milliseconds");
}
else {
    console.log(word + " is not in the list");
}

