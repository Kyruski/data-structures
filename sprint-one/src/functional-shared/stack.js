var Stack = function() {
  const someInstance = {top: 0, storage: {}};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.top++;
    this.storage[top] = value;
  },
  pop: function() {
    if (this.top) {
      return 0;
    }
    const poppedVar = this.storage[top];
    this.top--;
    return poppedVar;
  },
  size: function() {
    return this.top;
  }
};


