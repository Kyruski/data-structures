class Stack {

  constructor() {
    this.top = 0;
    this.storage = {};
  }

  push(value) {
    this.top++;
    this.storage[this.top] = value;
  }

  pop() {
    if (this.size() === 0) {
      return 0;
    }
    const poppedItem = this.storage[this.top];
    this.top--;
    return poppedItem;
  }

  size() {
    return this.top;
  }

}