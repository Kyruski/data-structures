var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let top = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    top++;
    storage[top] = value;
  };

  someInstance.pop = function() {
    if (top < 1) {
      return 0;
    }
    const poppedVar = storage[top];
    top--;
    return poppedVar;
  };

  someInstance.size = function() {
    return top;
  };

  return someInstance;
};
