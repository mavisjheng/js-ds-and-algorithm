// write a program that stores the words from a large text file in a BST and displays the number of times each word occurs in the text
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
      var currNode = this.root;                 // for traverse
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
    var node = this.find(data);
    node.occurrence++;
    return node;
  }
}

function inOrder(currRoot) {
  if (currRoot !== null) {
    inOrder(currRoot.left);
    console.log(currRoot.show() + ": " + currRoot.occurrence);
    inOrder(currRoot.right);
  }
}

var text = "the brown fox jumped over the blue fox jack is taller than mary so mary is not taller than jack time time time time fly fly fly the following sample message file shows how to create and use a message text file that defines messages in multiple languages this sample message file Sample.mc contains a comment block followed by a header section followed by messages in two languages you must use a Unicode-compatible editor to simultaneously support the characters used in different written languages for more information and a detailed description of the syntax of .mc files you may provide arbitrary sections in the same format as the ones above this may be of use for extremely complicated plugins where more information needs to be conveyed that doesn't fit into the categories of description or installation arbitrary sections will be shown below the built-in sections outlined above";
var words = text.split(" ");

var wordsDistri = new BST();
wordsDistri.insert(words[0]);
for (var i = 1; i < words.length; i++) {
  var word = words[i];
  var wordFound = wordsDistri.find(word);
  if (wordFound === null) {
    wordsDistri.insert(word);
  }
  else {
    wordsDistri.updateOccu(word);
  }
}

inOrder(wordsDistri.root);

