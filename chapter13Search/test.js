// finds the second-smallest element in a list
function findSecMin(arr) {
  var secMin = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < secMin && arr[i] !== findMin(arr)) {
      secMin = arr[i];
    }
  }
  return secMin;
}