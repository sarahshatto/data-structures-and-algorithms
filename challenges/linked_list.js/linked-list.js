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

  // insert method .. takes in any value as an argument , adds a new node with that value to the head of the list with O(1) Time performance.
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

}

console.log(string);


module.exports = LinkedList;
