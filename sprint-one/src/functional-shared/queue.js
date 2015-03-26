var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {front : 0, back : 0, storage : {}};
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.back] = value;
    this.back++;
  },
  dequeue : function(value) {
    if (this.size() === 0) {return undefined;}
    var temp = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return temp;
  },
  size : function() {
    return this.back - this.front;
  }
};



