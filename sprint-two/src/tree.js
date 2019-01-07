var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  const newTreeNode = Tree(value);
  this.children.push(newTreeNode);
};

treeMethods.contains = function(target) {
  let isTrue = false;
  const searchTree = function(tree) {
    if (isTrue === true || tree.children.length === 0) {
      return;
    } else if (target === tree.value) {
      isTrue = true; 
    } else {
      for (let i = 0; i < tree.children.length; i++) {
        searchTree(tree.children[i]);
      }
    }
  };
  searchTree(this);
  return isTrue;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
