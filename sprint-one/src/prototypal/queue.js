var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.front = 0;
  queue.back = 0;
  queue.storage = {};

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

queueMethods.dequeue = function() {
  if (this.size() === 0) return undefined;
  var temp = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  return temp;
};

queueMethods.size = function() {
  return this.back - this.front;
};
