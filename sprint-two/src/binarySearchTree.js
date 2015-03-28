var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(insertValue) {
  if (this.value > insertValue) {
    if (this.left === null) {
      this.left = new BinarySearchTree(insertValue);
    } else {
      this.left.insert(insertValue);
    }
  } else if (this.value < insertValue) {
    if (this.right === null) {
      this.right = new BinarySearchTree(insertValue);
    } else {
      this.right.insert(insertValue);
    }
  }
};

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (target < this.value && this.left !== null && this.left.contains(target)) {
    return true;
  } else if (target > this.value && this.right !== null && this.right.contains(target)) {
    return true;
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
