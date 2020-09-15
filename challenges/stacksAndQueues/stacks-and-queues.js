'use strict'

class Node {
  constructor(value) {
    this.value = value; // Properties for the value stored in the Node
    this.next = null; // pointer to the next node.
  }
}

class Stack {
  constructor(){
    this.top = null
  }

  push(value){
     let newTop = new Node(value);
     newTop.next = this.top;
     this.top = newTop;
  }

  pop(){
    if(this.isEmpty()) { // If this.isEmpty evaluates to true, execute this line of code
      throw "stack is empty"; // throw an exception
    }

    let topValue = this.top.value; // the whole point- making a copy of the top node's value
    this.top = this.top.next; // once you've grabbed that copy and stored it somewhere else, you point next to the new "top". 
    return topValue; // return the value you stored. 
  }

  peek(){
    if(this.isEmpty()) { // If this.isEmpty evaluates to true, execute this line of code
      throw "stack is empty"; // throw an exception
    }

    return this.top.value;
  }

  isEmpty(){
    return this.top === null;
  }
}


class Queue {
  constructor(){
    this.front = null; //class that has a front property - creates an empty Queue when instantiated.
    this.end = null;
  }

  enqueue(value){
    let newEnd = new Node(value);

    if(this.isEmpty()){
      this.front = newEnd;
      this.end = this.front;
    }
    else
    {
      this.end.next = newEnd;
      this.end = newEnd;
    }
  }

  dequeue(){
    let frontValue = this.peek(); // 
    this.front = this.front.next;
    return frontValue;
}


  peek(){
    if(this.isEmpty()){
      throw "empty";
    } 

     return this.front.value; 

    }


  isEmpty() {
    return this.front === null;
  }
}

module.exports = Stack;


//  //  //  //  //  STACKS  //  //  //  //  //  

// A stack is a data structure that consists of Nodes. 
// Each Node references the next node in the stack, but doesn't reference the previous. 


// Different things that you can do to a stack: 
  //  Push - Nodes or items that are put into the stack are pushed.
  //  Pop - Nodes or items that are removed from the stack are popped. When you attempt to pop an empty stack an exception will be raised.
  //  Pop - Nodes or items that are removed from the stack are popped. When you attempt to pop an empty stack an exception will be raised.
  //  Top - This is the top of the stack.
  //  Peek - When you peek you will view the value of the top Node in the stack. When you attempt to peek an empty stack an exception will be raised.

   
  // FILO : First In Last Out 
    //  //  This means that the first item added in the stack will be the last item popped out of the stack. 
  // LIFO: Last In First Out 
    //  //  This means that the last item added to the stack will be the first item popped out of the stack. 

  // As you are adding things to your stack, they are stacking one on top of another. The topmost item So 

  //  //  //  //  // QUEUES  //  //  //  //  // 

// 
 