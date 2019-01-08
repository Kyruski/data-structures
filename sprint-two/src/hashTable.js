

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.items = 0;
};

HashTable.prototype.getBucket = function(k) {
  const hashIndex = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(hashIndex);
  return [bucket || [], hashIndex];
}

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



/*
 * Complexity: What is the time complexity of the above functions?
 * getBucket: Constant
 * insert: Linear/Constant
 * retrieve: Linear/Consant
 * remove: Linear/Constant
 */


