var Queue = function() {
  var someInstance = function(valueToStore) {
    const obj = {valueToStore: valueToStore};
    // let instanceBehind;//set in storage
    return obj;
  };

  var front = 1;
  var back = 0;

  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (back > front) {
      console.log('You messed up. Empty queue.');
    }
    someInstance.storage[back + 1];
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
  };

  return someInstance;
};
