var Queue = function() {
  let someInstance = {front: 0, back: 0, storage: {}};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back] = value;
    this.back++;
  },
  dequeue: function() {
    if (this.size() === 0) {
      return 0;
    }
    let dequeuedItem = this.storage[this.front];
    this.front++;
    return dequeuedItem;
  }, 
  size: function() {
    return this.back - this.front;
  }
};


