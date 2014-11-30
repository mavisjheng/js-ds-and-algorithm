function List() {
  this.listSize = 0;          // property
  this.pos = 0;               // property
  this.dataStore = [];        // property
  this.clear = clear;         // below are functions and their definitions
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
  
  // append() function appends a new element onto the list at the next available position (end of a list)
  function append(element) {
    this.dataStore[this.listSize++] = element;
  }

  // find() function finds the element in the list
  // remove() & insert() function will use find() function as a helper funciton
  function find(element) {
    for(var i = 0; i < this.dataStore.length; i++) {
      if(this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;    // not found
  }

  // remove() function uses the position returned by find() to splice the dataStore array at that position
  function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;    // not found     
  }

  // length() function returns the number of elements in a list
  function length() {
    return this.listSize;
  }

  // toString() function allows us to view the elements of a list 
  function toString() {
    return this.dataStore;
  }

  // insert() function inserts an element into a list after an existing element or at the beginning of a list
  function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      this.listSize++;
      return true; 
    }
    return false;
  }

  // clear() function clears out the elements of a list and allows new elements to be entered
  function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  // contains() function checks a list to see if a particular value is part of the list
  function contains(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }

  // traverse a list, getElement() function displays the current element in a list
  function front() {
    this.pos = 0;
  }
  function end() {
    this.pos = this.listSize - 1;
  }
  function prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  } 
  function next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }
  function currPos() {
    return this.pos;
  }
  function moveTo(newPos) {
    this.pos = newPos;
  }
  function getElement() {
    return this.dataStore[this.pos];
  }
}

// displayList() function displays the list available, also works fine if the list is made up of Customer objects
function displayList(list) {
  for(list.front(); list.currPos() < list.length(); list.next()) {
    if (list.getElement() instanceof Customer) {
      console.log(list.getElement().name + ", " + list.getElement().movie);
    }
    else {
      console.log(list.getElement());
    }
    if (list.currPos() === list.length()-1) {         // avoid infinite loop
      break;
    }
  }
}

// Customer object's constructor function
function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}

// checkOutMovie() function allows a customer to check out a movie
function checkOutMovie(name, movie, movieList, customerList) {
  if (movieList.contains(movie)) {
    var custm = new Customer(name, movie);
    movieList.remove(movie);
    customerList.append(custm);
  }
  else {
    console.log(movie + " is not available here.");
  }
}


var customerList = new List();
var movieList = new List();
movieList.append("The Shawshank Redemption");
movieList.append("The Godfather");
movieList.append("The Godfather: Part II");
movieList.append("Pulp Fiction");
movieList.append("The Good, the Bad and the Ugly");
movieList.append("12 Angry Men");
movieList.append("Schindler’s List");
movieList.append("The Dark Knight");
movieList.append("The Lord of the Rings: The Return of the King");
movieList.append("Fight Club");
movieList.append("Star Wars: Episode V - The Empire Strikes Back");
movieList.append("One Flew Over the Cuckoo’s Nest");
movieList.append("The Lord of the Rings: The Fellowship of the Ring");
movieList.append("Inception");
movieList.append("Goodfellas");
movieList.append("Star Wars");
movieList.append("Seven Samurai");
movieList.append("The Matrix");
movieList.append("Forrest Gump");
movieList.append("City of God");
console.log("Available movies:" );
displayList(movieList);
console.log("\n");
checkOutMovie("Gordon", "The Dark Knight", movieList, customerList);
console.log("Customer info: ");
displayList(customerList);
console.log("\n");
displayList(movieList);

