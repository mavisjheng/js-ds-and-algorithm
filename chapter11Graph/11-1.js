// The real information about a graph is stored in the edges, since the edges describe the structure of a graph
// dfs: depth-first search
// bfs: breadth-first search, layer by layer
function Graph(v) {           
  this.vertices = v;               // v: number of vertices
  //this.edges = 0;
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.displayAdjList = displayAdjList;
  this.dfs = dfs;                  
  this.bfs = bfs;                  
  
  // array of adjacency list
  // the edges are stored as a vertex-indexed array of lists (arrays) of the vertices adjacent to each vertex
  // length of the array adj is equal to the number of vertices
  // each element of the array adj is a subarray to store all the adjacent vertices
  this.adj = [];
  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
  }
  
  // finds the adjacency list for vertex v1 and adds v2 to the list, and vice versa
  function addEdge(v1, v2) {
    this.adj[v1].push(v2);
    this.adj[v2].push(v1);
  }
  
  // shows a list of all vertices and its adjacency list
  function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
      var list = i + " → ";
      for (var j = 0; j < this.vertices; j++) {
        if (this.adj[i][j] !== undefined) {
          list += this.adj[i][j] + " ";
        }
      }
      console.log(list);
    }
  }
  
  // shows every subarray of adj[i]
  function displayAdjList() {
    for (var i = 0; i < this.vertices; i++) {
      console.log("adj[" + i + "]: " + this.adj[i]);
    }
  }
  
  // helper array for function dfs()
  // this array stores visited vertices and initialize it to all false values
  this.visitedDfs = [];                
  for (var j = 0; j < this.vertices; j++) {
    this.visitedDfs[j] = false;
  }
  
  // visit a vertex that has not already been visited, mark it as having been visited
  // then recursively visit the other unvisited vertices that are in its adjacency list
  function dfs(v) {
    if (this.adj[v] !== undefined) {                // first, check to see if v is part of this graph   
      console.log("visited vertex: " + v);
    }
    else {
      console.log(v + " is not part of this graph");
      return false;
    }
    
    this.visitedDfs[v] = true;
    for (var key in this.adj[v]) {                  // key is index of array, not the element of array, access element by referencing key
      var currV = this.adj[v][key];
      if (currV !== undefined && !this.visitedDfs[currV]) {          // if currV is not undefined and not been visited yet
         this.dfs(currV);                                            // recursively visit other unvisited vertices of currV's adjacency list
      }
    }
  }
  
  // helper arrays for function bfs()
  // edgeTo[] records the paths that lead from one vertex to another vertex
  this.edgeTo = [];
  this.visitedBfs = [];                
  for (var k = 0; k < this.vertices; k++) {
    this.visitedBfs[k] = false;
  }
  
  // add all unvisited vertices which are adjacent to v to the queue
  // layer by layer, queue, FIFO
  function bfs(v) {
    var queue = [];
    if (this.adj[v] === undefined) {                 // first, check to see if v is part of this graph
      console.log(v + " is not part of this graph");
      return false;
    }
    this.visitedBfs[v] = true;
    queue.push(v);
    while (queue.length > 0) {
      var w = queue.shift();
      console.log("visited vertex: " + w);
      
      for (var key in this.adj[w]) {         // add all unvisited vertices of this vertex's adjacency list to queue
        var currV = this.adj[w][key];
        if (currV !== undefined && !this.visitedBfs[currV]) {
          this.edgeTo[currV] = w;
          this.visitedBfs[currV] = true;
          queue.push(currV);
        }
      }
    }
  }
}

var g1 = new Graph(5);
g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 4);
g1.showGraph();
console.log();
g1.displayAdjList();
console.log();
console.log("depth-first search:");
g1.dfs(0);
console.log();
console.log("breadth-first search:");
g1.bfs(0);
console.log();

// p.145
var g2 = new Graph(13);
g2.addEdge(0, 1);
g2.addEdge(0, 2);
g2.addEdge(0, 3);
g2.addEdge(0, 4);
g2.addEdge(1, 5);
g2.addEdge(5, 9);
g2.addEdge(2, 6);
g2.addEdge(6, 10);
g2.addEdge(3, 7);
g2.addEdge(7, 11);
g2.addEdge(4, 8);
g2.addEdge(8, 12);
g2.showGraph();
console.log();
g2.displayAdjList();
console.log();
console.log("depth-first search:");
g2.dfs(0);
console.log();
console.log("breadth-first search:");
g2.bfs(0);

