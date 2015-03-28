var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0; // number of elements in the storage array
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  bucket.push([k, v]);
  this._storage.set(i, bucket);
  this._count++;

  if (this._count / this._limit >= 0.75) {
    this.rehash(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        return bucket[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        bucket.splice(j,1);
        this._storage.set(i, bucket);
        this._count--;
      }
    }
  }

  if ((this._count / this._limit <= 0.25) && (this._limit > 8)) {
    this.rehash(Math.ceil(this._limit / 2));
  }

};

HashTable.prototype.rehash = function(newLimit) {
  this._limit = newLimit;
  var tempStorage = this._storage;
  this._storage = new LimitedArray(this._limit);
  this._count = 0;

  var callback = function(bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        var key = bucket[i][0];
        var value = bucket[i][1];
        this.insert(key, value);
      }
    }
  };

  callback = callback.bind(this);
  tempStorage.each(callback);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
