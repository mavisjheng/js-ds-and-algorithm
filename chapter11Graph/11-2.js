// shortest path algorithm
// modification based on bfs: edgeTo[]
function Graph(v) {           
  this.vertices = v;               
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.displayAdjList = displayAdjList;
  this.bfs = bfs;                  
  this.hasPathTo = hasPathTo;
  this.shortestPathTo = shortestPathTo;
  
  // array of adjacency list
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
  
  // helper arrays for function bfs()
  // edgeTo[] records the paths that lead from one vertex to another vertex
  this.edgeTo = [];
  this.visitedBfs = [];                
  for (var j = 0; j < this.vertices; j++) {
    this.visitedBfs[j] = false;
  }
  
  // add all unvisited vertices that are adjacent to v and add them to the queue
  // layer by layer, FIFO
  function bfs(v) {
    var queue = [];
    if (this.adj[v] === undefined) {            
      console.log(v + " is not part of this graph");
      return false;
    }
    this.visitedBfs[v] = true;
    queue.push(v);
    while (queue.length > 0) {
      var w = queue.shift();
      console.log("visited vertex: " + w);
      
      for (var key in this.adj[w]) {                  // add all unvisited vertices of this vertex's adjacency list to queue
        var currV = this.adj[w][key];
        if (currV !== undefined && !this.visitedBfs[currV]) {
          this.edgeTo[currV] = w;
          this.visitedBfs[currV] = true;
          queue.push(currV);
        }
      }
    }
  }
  
  // helper function for shortestPathTo()
  // if after doing bfs(), visitedBfs is still false, this means no edge to that vertex
  function hasPathTo(v) {
    return this.visitedBfs[v];
  }
  
  // shortestPath[] is a stack
  function shortestPathTo(v) {
    var sourceV = 0;
    if (!this.hasPathTo(v)) {
      console.log("no path to " + v);
      return undefined;
    }
    var shortestPath = [];
    for (var i = v; i !== sourceV; i = this.edgeTo[i]) {
      shortestPath.push(i);
    }
    shortestPath.push(sourceV);
    return shortestPath;
  }
}

var g1 = new Graph(13);
g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(0, 3);
g1.addEdge(0, 4);
g1.addEdge(1, 5);
g1.addEdge(5, 9);
g1.addEdge(2, 6);
g1.addEdge(6, 10);
g1.addEdge(3, 7);
g1.addEdge(7, 12);
g1.addEdge(4, 8);
g1.addEdge(8, 11);
g1.addEdge(10, 12);
g1.showGraph();
console.log();
g1.displayAdjList();
console.log();
console.log("breadth-first search:");
g1.bfs(0);

// path, which is returned by shortestPathTo(), is a stack, so pop()
var path = g1.shortestPathTo(12);
var shortestPath = "";
while (path.length > 0) {
  if (path.length > 1) {
    shortestPath += path.pop() + " - ";
  }
  else {
    shortestPath += path.pop();
  }
}
console.log("shortest path to 12 is: " + shortestPath);

