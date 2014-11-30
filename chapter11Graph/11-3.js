// topological sort of a directed graph is a linear ordering of its vertices 
// such that for every directed edge uv from vertex u to vertex v, u comes before v in the ordering
// a diagraph of topological sort should be acyclic (has no cycles)
// modification based on bfs, indegree[]: records the number of incoming edges for each vertex
// only the vertex with no incoming edges can be put into the queue
function Graph(v) {           
  this.vertices = v;      
  this.vertexList = [];              // associates each vertex with a symbol
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.displayAdjList = displayAdjList;
  this.topoSort = topoSort;
  
  // adjacency list
  this.adj = [];
  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
  }
  
  function addEdge(v1, v2) {
    this.adj[v1].push(v2);
    this.adj[v2].push(v1);
    this.indegree[v2]++;             // since it is a directed graph, v2 has an incoming edge from v1
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
  
  // helper array for topoSort()
  this.visited = [];
  for (var j = 0; j < this.vertices; j++) {
    this.visited[j] = false;
  }
  
  // helper array for topoSort()
  // records number of incoming edges for each vertex, set its value to 0 at beginning
  // the number of indegree will change once the addEdge() be called
  this.indegree = [];
  for (var k = 0; k < this.vertices; k++) {
    this.indegree[k] = 0;
  }
  
  // modified bfs, only the vertex with no incoming edges can be put into the queue
  // a diagraph of topological sort should be acyclic (has no cycle)
  function topoSort() {
    // queue: stores those vertices which has no incoming edges
    // try to find the first vertex and put it into queue to start doing the topological sort
    var queue = [];                              
    for (var i = 0; i < this.vertices; i++) {
      if (this.indegree[i] === 0) {
        queue.push(i);
      }
    }
    
    for (var j = 0; j < this.vertices; j++) {
      if (queue.length === 0) {               // if queue is empty which means the remaining graph has cycle
        console.log("this graph has cycle, cannot do topological sort");
        return false;
      }
      
      var v = queue.shift();                  // v is a vertex which has no incoming edge, remove from the front of queue
      this.visited[v] = true;                 // mark it as visited
      console.log(this.vertexList[v]);
      
      // update the value of indegree[], delete the edges which are coming out from v, which refers to v's adjacency list
      for (var key in this.adj[v]) {          
        var currV = this.adj[v][key];
        if (currV !== undefined && !this.visited[currV]) {
          this.indegree[currV]--;
        }
        if (this.indegree[currV] === 0 && !this.visited[currV]) {    // push the vertex which has no incoming edges to queue
          queue.push(currV);
        }
      }
    }
  }
}

// p.152
var g1 = new Graph(11);
g1.vertexList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
g1.addEdge(0, 1);
g1.addEdge(0, 4);
g1.addEdge(0, 6);
g1.addEdge(1, 2);
g1.addEdge(4, 5);
g1.addEdge(6, 7);
g1.addEdge(2, 3);
g1.addEdge(7, 8);
g1.addEdge(3, 10);
g1.addEdge(5, 9);
g1.addEdge(8, 9);
g1.addEdge(9, 10);
g1.topoSort();
console.log();

// p.153
var IS = new Graph(14);
IS.vertexList = ["Introduction to Information Science", "DataBase Management", "Advanced DataBase Management", "Data Structures", 
                 "Client & Server", "Cryptography", "Network Security", "Information System Analysis",
                 "Human Information Processing", "Social Computing", "Interactive System Design", "Information System Design", 
                 "Web Technologies and Standards", "Web Services & Distributed Computing"];
IS.addEdge(0, 1);
IS.addEdge(1, 2);
IS.addEdge(0, 3);
IS.addEdge(3, 4);
IS.addEdge(3, 5);
IS.addEdge(5, 6);
IS.addEdge(3, 7);
IS.addEdge(7, 11);
IS.addEdge(0, 8);
IS.addEdge(8, 9);
IS.addEdge(8, 10);
IS.addEdge(0, 12);
IS.addEdge(12, 13);
IS.topoSort();

