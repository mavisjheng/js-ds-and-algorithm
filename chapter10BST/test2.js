// remove node from BST
function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(currNode, data) {
  if (currNode === null) {
    return null;
  }
  if (data === currNode.data) {
    if (currNode.left === null && currNode.right === null) {
      return null;
    }
    if (currNode.left === null) {
      return currNode.right;
    }
    if (currNode.right === null) {
      return currNode.left;
    }
    var tempNode = getSmallest(currNode.right);
    currNode.data = tempNode.data;
    currNode.right = removeNode(currNode.right, tempNode.data);
    return currNode;
  }
  else if (data < currNode.data) {
    currNode.left = removeNode(currNode.left, data);
    return currNode;
  }
  else {
    currNode.right = removeNode(currNode.right, data);
    return currNode;
  }
}

