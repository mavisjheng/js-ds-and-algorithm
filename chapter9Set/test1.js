// test program for function add(), remove(), and display()
var names = new Set();
names.add("Chris");
names.add("John");
names.add("Mary");
names.add("Sam");
names.add("Tom");
names.add("Anne");

if (names.add("Sam")) {
  console.log("Sam is added");
}
else {
  console.log("Sam isn't added, already in set");
}

if (names.add("Zoe")) {
  console.log("Zoe is added");
}
else {
  console.log("Zoe isn't added, already in set");
}

console.log(names.display());

if (names.remove("Sam")) {
  console.log("Sam is removed");
}
else {
  console.log("Sam isn't removed, there is no such member in set");
}

if (names.remove("Joe")) {
  console.log("Joe is removed");
}
else {
  console.log("Joe isn't removed, there is no such member in set");
}

console.log(names.display());

// test program for function subset()
var set3 = new Set();
set3.add("Clayton");
set3.add("Jennifer");
if (set3.subset(set1)) {
  console.log("set3 is a subset of set1");
}
else {
  console.log("set3 is not a subset of set1");
}

if (set3.subset(set2)) {
  console.log("set3 is a subset of set2");
}
else {
  console.log("set3 is not a subset of set2");
}

