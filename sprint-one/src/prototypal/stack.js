var Stack = function() {
  let someInstance = Object.create(stackMethods);
  someInstance.top = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.top++;
    this.storage[this.top] = value;
  },
  pop: function() {
    if (this.size() === 0) {
      return 0;
    }
    const poppedValue = this.storage[this.top];
    this.top--;
    return poppedValue;
  },
  size: function() {
    return this.top;
  }
};