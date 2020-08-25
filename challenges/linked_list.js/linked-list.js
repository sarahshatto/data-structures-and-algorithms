//  // Create a Node class that has properties for the value stored in Node, and a pointer to the next node.  -- see node.js

//  // in your LinkedList class, include the head property. Upon instantiation, an empty Linked List should be created. 

// insert method .. takes in any value as an argument , adds a new node with that value to the head of the list with O(1) Time performance.

// includes method which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node's value somewhere within the list. 

// toString method which takes in no arguments and returns a string representing all the values in the Linked List, 

'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  // .append(value) which adds a new node with the given value to the end of the list
  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }
  
      current.next = node;
    }

    return this;
  }
  insert(value) {
    let node = new Node(value);
    
   node.next = this.head;
   this.head = node;
  

   return this.head;
  }

  includes(searchValue) {

    let current = this.head;
    let result = searchValue;

    while (current !== null) {
      if(current.value === searchValue){
        console.log(result, 'Is in your list!')
        return true;
      }
      current = current.next;
      }
    console.log(result, 'Is not in your list!');
    
    return false; 
  } 

  
  toString() {
    let current = this.head;
    let string = '';

    while (current) {
      if (current !== null){
        string = `${string} { ${current.value} } ->`;
        current = current.next;
    }
  if (current === null) {
    string = `${string} ${null}`;
   }
  }
  console.log(string);
}

insertBefore(value, newVal) {
  let current = this.head;
  let previous;
  while (current.next) {
    if(current.value)

      if (current.value === value) {
        let node = new Node(newVal);
        node.next = previous.next;
        previous.next = node;
        console.log('previous: ', previous);
        return this;
      }
    previous = current;
    current = current.next;
  }
}

insertAfter(value, newVal) {
  let current = this.head;
  while(current.next) {
    if(current.value ===value) {
      let node = new Node(newVal);
      let nextNode = current.next;
      current.next = node;
      node.next = nextNode;
      return this;
    }
    current = current.next;
  }
}

}



module.exports = LinkedList;
