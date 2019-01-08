

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.newGraph = Object.create(Graph.prototype);
  this.newGraph.value = node;
  this.newGraph.edges = [];
  this.nodes.push(this.newGraph);
  // if (this.value === null) {
  //   this.value = node;
  // } else {
  //   const newNode = new Graph;
  //   newNode.value = node;
  // }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes.length === 0) {
    return false;
  }
  const secondArg = arguments[1] || 0;
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      if (secondArg === 0) {
        return true;
      } else if (secondArg === 1) {
        return [this.nodes[i], i];
      }
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  const containsResult = this.contains(node, 1);
  const desiredNode = containsResult[0];
  const index = containsResult[1];
  for (let i = 0; i < desiredNode.edges.length; i++) {
    for (let j = 0; j < desiredNode.edges[i].edges.length; j++) {
      if (desiredNode.edges[i].edges[j].value === node) {
        desiredNode.edges[i].edges.splice(j, 1);
      }
    }
  }
  this.nodes.splice(index, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      for (let j = 0; j < this.nodes[i].edges.length; j++) {
        if (this.nodes[i].edges[j].value === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  const toNodeContainsResult = this.contains(toNode, 1);
  const toNodeDesiredNode = toNodeContainsResult[0];
  const fromNodeContainsResult = this.contains(fromNode, 1);
  const fromNodeDesiredNode = fromNodeContainsResult[0];
  fromNodeDesiredNode.edges.push(toNodeDesiredNode);
  toNodeDesiredNode.edges.push(fromNodeDesiredNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


