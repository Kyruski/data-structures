

// Instantiate a new graph
var Graph = function() {
  this.value = null;
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.value === null) {
    this.value = node;
  } else {
    const newNode = new Graph;
    newNode.value = node;
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  const runType = arguments[1] || 0;
  let isTrue = false;
  const visitedArray = [];
  const searchGraph = function(currentNode) {
    if (isTrue) {
      return;
    }
    visitedArray.push(currentNode);
    if (currentNode.value === node) {
      if (runType === 1) {
        isTrue = currentNode;
      } else {
        isTrue = true;
      }
    } else {
      for (let i = 0; i < currentNode.edges.length; i++) {
        if (visitedArray.contains(currentNode.edges[i])) {
          continue;
        } else {
          searchGraph(currentNode.edges[i]);
        }
      }
    }
    return isTrue;
  };
  return searchGraph(this);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.edges.length === 0) {
    this.value = null;
  } else {
    let desiredNode = this.contains(node, 1);
    for (let i = 0; i < desiredNode.edges.length; i++) {
      const index = desiredNode[i].edges.indexOf(node);
      desiredNode[i].edges.splice(index, 1);
    }
    desiredNode.edges = [];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
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


