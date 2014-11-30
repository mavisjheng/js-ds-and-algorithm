// exercise 4 & 5, from home to 師大夜市
// perform the shortest path, a depth-first search and a breadth-first search
// because of the graph has some crossover points so the result will be weird but actually it is correct
function Graph(v) {           
  this.vertices = v;
  this.vertexList = [];
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.displayAdjList = displayAdjList;
  this.dfs = dfs;                  
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
  
  // helper array for function dfs()
  this.visitedDfs = [];                
  for (var j = 0; j < this.vertices; j++) {
    this.visitedDfs[j] = false;
  }
  
  function dfs(v) {
    if (this.adj[v] !== undefined) {               
      console.log("visited vertex: " + this.vertexList[v]);
    }
    else {
      console.log(v + " is not part of this graph");
      return false;
    }
    
    this.visitedDfs[v] = true;
    for (var key in this.adj[v]) {                 
      var currV = this.adj[v][key];
      if (currV !== undefined && !this.visitedDfs[currV]) {
        //console.log(currV);
        this.dfs(currV);                                           
      }
    }
  }
  
  // helper arrays for function bfs()
  this.edgeTo = [];
  this.visitedBfs = [];                
  for (var k = 0; k < this.vertices; k++) {
    this.visitedBfs[k] = false;
  }
  
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
      console.log("visited vertex: " + this.vertexList[w]);
      
      for (var key in this.adj[w]) {        
        var currV = this.adj[w][key];
        if (currV !== undefined && !this.visitedBfs[currV]) {
          this.edgeTo[currV] = w;
          this.visitedBfs[currV] = true;
          queue.push(currV);
          //console.log(currV);
          //console.log(queue);
        }
      }
    }
  }
  
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

var route = new Graph(32);
route.vertexList = ["0-家", 
                    "1-捷運南京東路站", "2-捷運忠孝復興站", "3-捷運大安站", "4-捷運科技大樓站", "5-復興南路口", "6-國北教大實小", "7-龍門國中(和平)", "8-大安森林公園", "9-溫州街口", 
                    "10-芝麻大廈", "11-中崙里", "12-忠孝復興站", "13-懷生國中", "14-聯合醫院仁愛院區", "15-和安里", "16-大安高工", "17-開平餐飲學校", "18-科技大樓站", 
                    "19-南京復興路口", "20-南京龍江路口", "21-南京建國路口", "22-松江南京站", "23-長安松江路口", "24-光華商場", "25-忠孝新生站", "26-仁愛新生路口", "27-信義新生路口", "28-金華新生路口",
                    "29-和平新生路口", "30-龍安國小(公務人力發展中心)",
                    "31-師大夜市"];
route.addEdge(0, 1);
route.addEdge(0, 10);
route.addEdge(0, 19);
route.addEdge(1, 2);
route.addEdge(2, 3);
route.addEdge(3, 4);
route.addEdge(4, 5);
route.addEdge(5, 6);
route.addEdge(6, 7);
route.addEdge(7, 8);
route.addEdge(8, 9);
route.addEdge(9, 31);
route.addEdge(10, 11);
route.addEdge(11, 12);
route.addEdge(12, 13);
route.addEdge(13, 14);
route.addEdge(14, 15);
route.addEdge(15, 16);
route.addEdge(16, 17);
route.addEdge(17, 18);
route.addEdge(18, 5);
route.addEdge(19, 20);
route.addEdge(20, 21);
route.addEdge(21, 22);
route.addEdge(22, 23);
route.addEdge(23, 24);
route.addEdge(24, 25);
route.addEdge(25, 26);
route.addEdge(26, 27);
route.addEdge(27, 28);
route.addEdge(28, 9);
route.addEdge(28, 29);
route.addEdge(29, 30);
route.addEdge(30, 31);

console.log("adjacency list:");
route.showGraph();
console.log();
console.log("depth-first search:");
route.dfs(0);
console.log();
console.log("breadth-first search:");
route.bfs(0);

var path = route.shortestPathTo(31);
var shortestPath = "";
while (path.length > 0) {
  if (path.length > 1) {
    shortestPath += route.vertexList[path.pop()] + " → ";
  }
  else {
    shortestPath += route.vertexList[path.pop()];
  }
}
console.log("shortest path from 家裡 to 師大夜市 is: " + shortestPath);

