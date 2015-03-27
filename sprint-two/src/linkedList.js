var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    //delete list[list.head]; // this should be garbage collected.
    list.head = temp.next;

    return temp.value;
  };

  list.contains = function(target){
    var currentNode = list.head;

    while (currentNode.next) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    // have to check the last node
    if (currentNode.value === target) {
        return true;
      }

    return false;
  };

/*
  list.printStuff = function() {
  console.log("Head: " + list.head);
  console.log("Tail: " + list.tail);

  var currentNode = list.head;

  while (currentNode.next) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
};
*/

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
