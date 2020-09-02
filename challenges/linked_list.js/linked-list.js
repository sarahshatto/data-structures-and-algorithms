

'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  
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

kthFromEnd(k) {
  // To do: 
  //  // find out how long the list is
  //  //  

  let firstCounter = this.head;
  let previous;
  let counter = 0;

  while (current) {
    counter++
    current = current.next;

    if (counter === k) {
      previous = this.head;
      previous = previous.next;
    };
  };

};
}



module.exports = LinkedList;


// Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges. 