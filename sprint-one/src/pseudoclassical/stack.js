var Stack = function() {
  this.top = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.top++;
  this.storage[this.top] = value;
};
Stack.prototype.pop = function() {
  if (this.size() === 0) {
    return 0;
  }
  const poppedItem = this.storage[this.top];
  this.top--;
  return poppedItem;
};
Stack.prototype.size = function() {
  return this.top;
};