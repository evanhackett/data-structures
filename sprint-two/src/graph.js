

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = {};
};

Graph.prototype.contains = function(node){
  if (this.nodes[node]) {
    return true;
  } else {
    return false;
  }

};

Graph.prototype.removeNode = function(node){
  for (var edgeTable in this.nodes[node]) {
    this.removeEdge(edgeTable[node]);
  }
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.nodes[fromNode][toNode] ? true : false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes) {
    cb(key);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



