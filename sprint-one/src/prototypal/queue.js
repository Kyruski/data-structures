var Queue = function() {
  let someInstance = Object.create(queueMethods);
  someInstance.front = 0;
  someInstance.back = 0;
  someInstance.storage = {};
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
