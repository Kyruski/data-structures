

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.items = 0;
};

HashTable.prototype.getBucket = function(k) {
  const hashIndex = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(hashIndex);
  return [bucket || [], hashIndex];
};

HashTable.prototype.insert = function(k, v) {
  let wasFound = false;
  const returnArray = this.getBucket(k);
  if (returnArray[0].length) {
    for (let i = 0; i < returnArray[0].length; i++) {
      if (returnArray[0][i][0] === k) {
        returnArray[0][i][1] = v;
        wasFound = true;
        break;
      }
    }
  }
  if (!wasFound) {
    returnArray[0].push([k, v]);
    this.items++;
  }
  this._storage.set(returnArray[1], returnArray[0]);
};

HashTable.prototype.retrieve = function(k) {
  const returnArray = this.getBucket(k);
  for (let i = 0; i < returnArray[0].length; i++) {
    if (returnArray[0][i][0] === k) {
      return returnArray[0][i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  const returnArray = this.getBucket(k);
  if (returnArray[0].length) {
    for (let i = 0; i < returnArray[0].length; i++) {
      if (returnArray[0][i][0] === k) {
        returnArray[0].splice(i, 1);
        this.items--;
        break;
      }
    }
  }
};

HashTable.prototype.resize = function(size) {
  this._limit = size;
  const holdingArray = [];
  for (let i = 0; i < this._storage.length; i ++) {
    for (let j = 0; j < this._storage[i].length; j++) {
      holdingArray.push(this._storage[i][j]);
    }
  }
  this._storage = LimitedArray(this._limit);
  for (let i = 0; i < holdingArray.length; i++) {
    this.insert(holdingArray[i][0], holdingArray[i][1]);
  }
};

HashTable.prototype.needsResizing = function() {
  return;
  // if (this.items =)
};



/*
 * Complexity: What is the time complexity of the above functions?
 * getBucket: Constant
 * insert: Linear/Constant (only iterates buckets)
 * retrieve: Linear/Consant (only iterates buckets)
 * remove: Linear/Constant (only iterates buckets)
 */


