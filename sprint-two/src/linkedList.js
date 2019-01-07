var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    const newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function() {
    if (this.head === null) {
      return 0;
    }
    const removedNode = this.head.value;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return removedNode;
  };

  list.contains = function(target) {
    if (this.head === null) {
      return 0;
    }
    const searchList = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return searchList(node.next);
      }
    };
    return searchList(this.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Add: Constant
 * Remove: Constant
 * Contains: Linear
 */
