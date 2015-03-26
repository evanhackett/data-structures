var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {counter : 0, storage : {}};
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  push : function(value){
    this.counter++;
    this.storage[this.counter] = value;
  },
  pop : function(){
    var temp = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return temp;
  },
  size : function(){
    if (this.counter <= 0) return 0;
    return this.counter;
  }
};


/*Stack.methods = {
  push : function(value){
    this.counter++;
    this.storage[this.counter] = value;
  },
  pop : function(){
    var temp = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return temp;
  },
  size : function(){
    if (this.counter <= 0) return 0;
    return this.counter;
  }
};
*/
