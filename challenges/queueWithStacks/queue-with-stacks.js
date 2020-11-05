'use strict'

const Stack = require("../stacksAndQueues/stacks-and-queues")

class PseudoQueue {
  constructor (){
    this.stack = new Stack();
  }

  enqueue(value){
    this.stack.push(value);
  }

  dequeue(){
    if(this.stack.isEmpty()){
      throw "PQueue is empty"
    } // because this is good to know 

    let tempStack = new Stack(); // create a second stack

    while (!this.stack.isEmpty) { // loop through the stack, as long as it isn't empty 
      tempStack.push(this.stack.pop()); // push each node into the other stack after you've popped it off the first.
    }

    let queueFront = tempStack.pop(); 

    while (!this.stack.isEmpty()) {
      this.stack.push(tempStack.pop());
    }

    return queueFront;
  }
}