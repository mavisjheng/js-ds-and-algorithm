// test program for 10-1.js and find() function

console.log("Preorder Traversal:");
preOrder(nums.root);
console.log();

console.log("Postorder Traversal:");
postOrder(nums.root);
console.log();

var num = 68;
if(nums.find(num) !== null) {
  console.log(num + " is found");
}
else {
  console.log(num + " is not found");
}

