// objects constructor function practice
function Person(first, middle, last) {
  this.first = first;
  this.middle = middle;
  this.last = last;
  this.initials = initials;
}
function initials() {
  return this.first[0] + this.middle[0] + this.last[0];
}

var client = new Person("George", "Mike", "Lee");
console.log("First name: " + client.first);
console.log("Middle name: " + client.middle);
console.log("Last name: " + client.last);
console.log("Initials: " + client.initials());

