var Queue = function() {
  var someInstance = function(valueToStore) {
    const obj = {valueToStore: valueToStore};
    return obj;
  };

  var front = 1;
  var back = 1;

  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.storage[back] = value;
    back++;
  };

  someInstance.dequeue = function() {
    if (back <= front) {
      return 0;
    }
    front++;
  };

  someInstance.size = function() {
    return (back <= front) ? 0 : back - front;
  };

  return someInstance;
};
