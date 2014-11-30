// binary search tree is a binary tree in which data with lesser values are stored in left nodes and data with greater values are stored in right nodes
// if "this" === global, don't put "this" before remove(), removeNode(), getSmallest() since global doesn't have these 3 functions
// if "this" === BST Object, can put "this" before remove(), removeNode(), getSmallest() since BST has these 3 functions
// there is recursion, so, add "this" before every remove() removeNode() getSmallest(), otherwise don't add any "this" before any of them
console.log("this outside function: " + this);   // {}

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
  
  function show() {
    return this.data;
  }
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
  this.removeNode = removeNode;
  this.getSmallest = getSmallest;
  
  // the purpose of currNode is traverse, to check if currNode's left child or right child is null, moves from level to level in the BST
  // ALWAYS insert new node as leaf node, so need to have a var parent by storing new node at parent.left or parent.right
  // var currNode: used to see its child node is null or not; var parent: used to store data as its left or right node
  function insert(data) {
    var n = new Node(data, null, null);        // create a Node object, passing in the data the node will store
    if (this.root === null) {                  // if a root node doesn’t exist, then the BST is new and this incoming node is the root node
      this.root = n;
    }
    else {
      var currNode = this.root;                 // for traverse
      var parent;                               // for store
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
  
  // lower values are always stored in left child nodes, so traverse the left edge of the BST until get to the last node
  function getMin() {
    var currNode = this.root;
    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    return currNode.data;
  }
  
  // bigger values are always stored in right child nodes, so traverse the right edge until reaches the right end of the BST
  function getMax() {
    var currNode = this.root;
    while (currNode.right !== null) {
      currNode = currNode.right;
    }
    return currNode.data;
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
  
  // helper function for removeNode()
  function getSmallest(node) {
    console.log("this in getSmallest():" + this);    // this === global because simple call and non-strict mode, although its execution context is BST (.128)
    var currNode = node;
    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    return currNode;
  }
  
  function remove(data) {
    console.log("this in remove():" + this); // this === BST Object because nums calls remove() is a BST object (.203)
    root = removeNode(this.root, data);     
  }
  
  // helper function for remove()
  function removeNode(currNode, data) {
    console.log("this in removeNode():" + this); //this === global because simple call and non-strict mode, although its execution context is BST (.103)
 
    if (currNode === null) {
      return null;
    }
    if (data === currNode.data) {               // compare to see if currNode holds the data we want to remove or not
      // node has no child
      if (currNode.left === null && currNode.right === null) {            
        return null;
      }
      // node has no left child
      if (currNode.left === null) {             
        return currNode.right;
      }
      // node has no right child
      if (currNode.right === null) {            
        return currNode.left;
      }
      // node has two children
      var tempNode = getSmallest(currNode.right);
      currNode.data = tempNode.data;
      currNode.right = removeNode (currNode.right, tempNode.data);
      return currNode;
    }
    // if removed data is smaller than currNode, keep traverse on left path
    else if (data < currNode.data) {
      currNode.left = removeNode (currNode.left, data);
      return currNode;
    }
    // if removed data is greater than currNode, keep traverse on right path
    else {
      currNode.right = removeNode (currNode.right, data);
      return currNode;
    }
  }
}

// inorder traversal visits all of the nodes of a BST in ascending order of the node key values
// bug: if call inOrder twice in a row, the result will show inOrderStr twice
var inOrderStr = "";
function inOrder(currNode) {
  if (currNode !== null) {
    inOrder(currNode.left);
    inOrderStr += currNode.show() + " ";
    inOrder(currNode.right);
  }
  return inOrderStr;
}

// preorder traversal visits the root node first, followed by the nodes in the subtrees under the left child of the root node
// followed by the nodes in the subtrees under the right child of the root node
var preOrderStr = "";
function preOrder(currNode) {
  if (currNode !== null) {
    preOrderStr += currNode.show() + " ";
    preOrder(currNode.left);
    preOrder(currNode.right);
  }
  return preOrderStr;
}

// postorder traversal visits all of the child nodes of the left subtree up to the root node
// and then visits all of the child nodes of the right subtree up to the root node
var postOrderStr = "";
function postOrder(currNode) {
  if (currNode !== null) {
    postOrder(currNode.left);
    postOrder(currNode.right);
    postOrderStr += currNode.show() + " ";
  }
  return postOrderStr;
}

var nums = new BST();
nums.insert(23);
nums.insert(13);
nums.insert(54);
nums.insert(7);
nums.insert(15);
nums.insert(2);
nums.insert(10);
nums.insert(14);
nums.insert(21);
nums.insert(46);
nums.insert(77);
nums.insert(32);
nums.insert(53);
nums.insert(68);
nums.insert(99);
console.log("Min: " + nums.getMin());
console.log("Max: " + nums.getMax());

console.log("Preorder Traversal:");
console.log(preOrder(nums.root));

nums.remove(54);

console.log("Inorder Traversal:");
console.log(inOrder(nums.root));

console.log("Postorder Traversal:");
console.log(postOrder(nums.root));

