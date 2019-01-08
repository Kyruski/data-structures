var BinarySearchTree = function(value) {
  const obj = {};
  _.extend(obj, BinarySearchTree.methods);
  obj.value = value;
  obj.left = undefined;
  obj.right = undefined;
  return obj;
};

BinarySearchTree.methods = {
  
  contains: function(value) {
    let valueFound = false;
    const searchTree = function(tree) {
      if (tree.value === value) {
        valueFound = true;
        return;
      }
      if (tree.left) {
        searchTree(tree.left);
      }
      if (valueFound) {
        return;
      }
      if (tree.right) {
        searchTree(tree.right);
      }
    };
    searchTree(this);
    return valueFound;
  },

  depthFirstLog: function(cb) {
    const modifyTree = function(tree) {
      cb(tree.value);
      if (tree.left) {
        modifyTree(tree.left);
      }
      if (tree.right) {
        modifyTree(tree.right);
      }
    };
    modifyTree(this);
  },

  insert: function(value) {
    const insertInTree = function(tree) {
      if (value < tree.value) {
        if (tree.left) {
          insertInTree(tree.left);
        } else {
          tree.left = BinarySearchTree(value);
        }
      } else {
        if (tree.right) {
          insertInTree(tree.right);
        } else {
          tree.right = BinarySearchTree(value);
        }
      }
    };
    insertInTree(this);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 * contains: Logarithmic
 * depthFirstLog: Linear
 * insert: Logarithmic
 */
