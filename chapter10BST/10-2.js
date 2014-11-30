// BST can keep track of the occurrences of data in a data set, record the distribution of grades on an exam
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.occurrence = 1;
  this.show = show;
  
  function show() {
    return this.data;
  }
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.find = find;
  this.updateOccu = updateOccu;
  
  // the purpose of var current is traverse, to check if its left child or right child is null, moves from level to level in the BST
  // ALWAYS insert new node as leaf node, so need to have a parent so that can decide to store at parent.left or parent.right
  // var currNode: used to see its child node is empty or not; var parent: used to store data as its left or right
  function insert(data) {
    var n = new Node(data, null, null);        // create a Node object, passing in the data the node will store
    if (this.root === null) {                  // if a root node doesn’t exist, then the BST is new and this node is the root node
      this.root = n;
    }
    else {
      var currNode = this.root;                // for traverse
      var parent;                              // for store
      while (true) {
        parent = currNode;
        if (data < currNode.data) {
          currNode = currNode.left;
          if (currNode === null) {
            parent.left = n;
            break;
          }
        }
        else {
          currNode = currNode.right;
          if (currNode === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }
  
  // requires a comparison be made between the data stored in the current node and the value being searched for
  // the comparison will determine if the search travels to the left child node or to the right child node
  function find(data) {
    var currNode = this.root;
    while (currNode.data !== data) {
      if (data < currNode.data) {
        currNode = currNode.left;
      }
      else {
        currNode = currNode.right;
      }
      if (currNode === null) {
        return null;
      }
    }
    return currNode;
  }
  
  function updateOccu(data) {
    var nodeFound = this.find(data);
    nodeFound.occurrence++;
    return nodeFound;
  }
}

function generateArray(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr[i] = Math.floor(Math.random() * 101);
  }
  return arr;
}

function printArray(arr) {
  var str = arr[0].toString() + " ";
  for (var i = 1; i < arr.length; i++) {
    str += arr[i].toString() + " ";
    if (i % 10 === 0) {
      str += "\n";
    }
  }
  console.log(str);
}

// generate 100 random grades and print it
var grades = generateArray(100);
printArray(grades);

// insert 100 grades to BST or update its occurrence
var gradesDistri = new BST();
gradesDistri.insert(grades[0]);
for (var i = 1; i < grades.length; ++i) {
  var grade = grades[i];
  var gradeFound = gradesDistri.find(g);
  if (gradeFound === null) {
    gradesDistri.insert(grade);
  }
  else {
    gradesDistri.updateOccu(grade);
  }
}

var g = 23;
var aGrade = gradesDistri.find(g);
if (aGrade === null) {
  console.log("No occurrence of " + g);
}
else {
  console.log("Occurrence of " + g + " is " + aGrade.occurrence);
}

