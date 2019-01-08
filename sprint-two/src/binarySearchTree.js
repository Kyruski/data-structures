var BinarySearchTree = function(value) {
  const obj = {};
  _.extend(obj, BinarySearchTree.methods);
  obj.left;
  obj.right;
  obj.value = value;
  return obj;
};

BinarySearchTree.methods = {

  insert: function(value) {

    const findInsertion = function(currentNode) {
      if (value > currentNode.value) {
        if (currentNode.right) {
          findInsertion(currentNode.right);
        } else {
          currentNode.right = BinarySearchTree(value);
        }
      } else {
        if (currentNode.left) {
          findInsertion(currentNode.left);
        } else {
          currentNode.left = BinarySearchTree(value);
        }
      }
    };
    findInsertion(this);
  },

  contains: function(value) {
    let isFound = false;
    const searchTree = function(currentNode) {
      if (currentNode.value === value) {
        isFound = true;
        return;
      } else if (value < currentNode.value && currentNode.left) {
        searchTree(currentNode.left);
      } else if (isFound) {
        return;
      } else if (value > currentNode.value && currentNode.right) {
        searchTree(currentNode.right);
      }
    };
    searchTree(this);
    return isFound;
  },

  depthFirstLog: function(cb) {
    const forEachNode = function(currentNode) {
      cb(currentNode.value);
      if (currentNode.left) {
        forEachNode(currentNode.left);
      }
      if (currentNode.right) {
        forEachNode(currentNode.right);
      }
    };
    forEachNode(this);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */