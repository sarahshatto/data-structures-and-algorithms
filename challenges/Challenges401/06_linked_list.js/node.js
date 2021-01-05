// Create a Node class that has properties for the value stored in Node, and a pointer to the next node. 



'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = Node;