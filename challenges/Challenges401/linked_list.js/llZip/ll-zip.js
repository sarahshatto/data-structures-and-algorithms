'use strict';
const LinkedList = require("../linked-list");

 

// creating a new class, and using the extends keyword to draw from LinkedList so that we can grab all of the methods from LinkedList and use them. 

// Also have to use the super keyword. It calls the constructor of the Ziplist class.

class Ziplist extends LinkedList {

  constructor (){
    super();
  }
// create a function called ziplist
//  // takes in two linked lists as arguments.
//  // Zip the two linked lists together into one.

  ziplists(listOne, listTwo){
    this.append(listOne.head.value);
    this.append(listTwo.head.value);
    let nodeListOne = listOne.head.next;
    let nodeListTwo = listTwo.head.next;
    // traversing the list: so long as nodeListTwo does not = null, append and move on 
    while(nodeListOne || nodeListTwo) {
      nodeListOne = nodeListOne.next;
      nodeListTwo = nodeListTwo.next;
    }
    nodeListOne ? this.append(nodeListOne.value) : null;
    nodeListTwo ? this.append(nodeListTwo.value) : null;
  }
}

module.exports = ZipList;

// this.append(nodeListOne.value)
// this.append(nodeListTwo.value)