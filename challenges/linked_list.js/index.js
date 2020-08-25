'use strict';

const LL = require('./linked-list');
let list = new LL();
// let listResults = 

list.insert('first');
list.insert('second');
list.insert('third');

list.includes('first');
// list.includes('fourth');
console.log('This was found:', list)
// console.log('constructed list:', list);


//  // Create a Node class that has properties for the value stored in Node, and a pointer to the next node.  -- see node.js

//  // in your LinkedList class, include the head property. Upon instantiation, an empty Linked List should be created. 

// insert method .. takes in any value as an argument , adds a new node with that value to the head of the list with O(1) Time performance.

// includes method which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node's value somewhere within the list. 

// toString method which takes in no arguments and returns a string representing all the values in the Linked List, 