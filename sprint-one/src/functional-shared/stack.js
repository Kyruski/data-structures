var Stack = function() {
  let someInstance = {top: 0, storage: {}};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.top++;
    this.storage[this.top] = value;
  },
  pop: function() {
    if (this.top < 1) {
      return 0;
    }
    const poppedVar = this.storage[this.top];
    this.top--;
    return poppedVar;
  },
  size: function() {
    return this.top;
  }
};


