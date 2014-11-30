// Arrays can also consist of objects, and all the functions and properties of arrays work with objects
function Point(x, y) {
  this.x = x;
  this.y = y;
}

function displayPoints(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i].x + ", " + arr[i].y);
  }
}

var point1 = new Point(5, 7);
var point2 = new Point(3, -1);
var point3 = new Point(-5, -12);
var point4 = new Point(-16, 44);
var pointArr = [point1, point2, point3, point4];
for(var j = 0; j < pointArr.length; j++) {
  console.log("Point " + (j+1) + ": " + pointArr[j].x + ", " + pointArr[j].y);
}

var point5 = new Point(0, 0);
pointArr.push(point5);
console.log("After push: ");
displayPoints(pointArr);
pointArr.shift();
console.log("After shift: ");
displayPoints(pointArr);