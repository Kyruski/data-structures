var Queue = function() {
  var someInstance = {};

  var front = 1;
  var back = 1;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function() {
    if (back <= front) {
      return 0;
    }
    const dequeuedValue = storage[front];
    front++;
    return dequeuedValue;
  };

  someInstance.size = function() {
    return (back <= front) ? 0 : back - front;
  };

  return someInstance;
};
