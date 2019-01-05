var Queue = function() {
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};
Queue.prototype.dequeue = function() {
  if (this.size() === 0) {
    return 0;
  }
  const dequeuedItem = this.storage[this.front];
  this.front++;
  return dequeuedItem;
};
Queue.prototype.size = function() {
  return this.back - this.front;
};