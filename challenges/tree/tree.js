'use strict'; 


// CODE CHALLENGE GOALS: 
  // Create a Node class that has properties for the value stored in the node, the left child node, and the right child node
  // Create a BinaryTree class: 
  // // Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

// Create a BinarySearchTree class
  //  // Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
  //  //  Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor(node = null) {
      this.root = node;
    }
   
  preOrder(){
    // PREORDER: We output the value first, check for a left, and then check for a right.  

    // create the array that the values will be stored in
    let preOrderResults = [];


    // function within a function --> takes in a node, checks to see if the node is valid (has a value), and if it does, we call our function preOrderAttempt on the root.left of the node. If it isn't valid, we return. 
    const _preOrderAttempt = (node) => {
      if (node === null) { return; }

      preOrderResults.push(node.value); // This is our output 
    
      _preOrderAttempt(node.left); // Is there a left? Sick. Run our output function on it. 
      _preOrderAttempt(node.right); // Is there a right? Sick. Run our output function on it. 
      // the _preOrderAttempt function begins with a check to see if the node === null, so we don't need to use an if statement. 
    }

    
  }

    
  inOrder(){
     // IN ORDER: We check for a node.left, we output the value, and then check for a node.right.   

    // create the array that the values will be stored in
    let inOrderResults = [];


    // function within a function --> takes in a node, checks to see if the node is valid (has a value), and if it is valid, we check for a node.left, and then output the value, and then check for a node.right.
    const _inOrderAttempt = (node) => {
      if (node === null) { return; }

      _inOrderAttempt(node.left); // Is there a left? Sick. Run our output function on it. 

      inOrderResults.push(node.value); // This is our output 

      _inOrderAttempt(node.right); // Is there a right? Sick. Run our output function on it. 
      // the _preOrderAttempt function begins with a check to see if the node === null, so we don't need to use an if statement. 
    }
    
  }

    
  postOrder(){
     // POST ORDER: We check for a node.left, check for a node.right, and then we output the value.    

    // create the array that the values will be stored in
    let postOrderResults = [];


    // function within a function --> takes in a node, checks to see if the node is valid (has a value), and if it is valid, we check for a node.left, check for a node.right, and then output the value.
    const _postOrderAttempt = (node) => {
      if (node === null) { return; }

      _postOrderAttempt(node.left); // Is there a left? Sick. Run our output function on it. 

      _postOrderAttempt(node.right); // Is there a right? Sick. Run our output function on it. 
      // the _preOrderAttempt function begins with a check to see if the node === null, so we don't need to use an if statement. 
      
      postOrderResults.push(node.value); // This is our output 
    }

  }
  }


 class BinarySearchTree extends BinaryTree {
    constructor(node = null){
      super();
    }
  

    add(value){
      let newNode = new Node(value); // create a new node, calling back to the Node class, passing in a value
      
      if (this.root == null) { // in the event that the list is empty .. aka there is no root 
        this.root = newNode; // take the new node you just created and make it the root
        return; // there's no need to traverse, there's nothing in the list
      }
      // find the correct location --> Binary Search Trees have organization. less than < Root < Greater than. 
      // comparing the current value against the current node - greater than/less than

      let currentNode = this.root; // Starting point is defined: at the root
      let previousNode = this.root; // This will be a reference to the previous node, but needs to start at the same spot
      
      while (!currentNode === null) { // traverse through - 
        previousNode = currentNode; // reassign the previousNode variable to the currentNode. 
        
        if(value < currentNode.value) { // compare value w/ currentNode - if less than, move to the left. 
          currentNode = currentNode.left; // this is redefining currentNode to "move on" to the next left node. 
        }
        else if(value >= currentNode.value) { // ELSE if compare w/ currentNode - if greater than, move to the right. 
          currentNode = currentNode.right; // this is redefining currentNode to "move on" to the next right node. 
        }
      }


      if (value < previousNode.value) {
        previousNode.left = newNode; // utilizing the previousNode
      } else {
        previousNode.right = newNode; // utilizing the previousNode
      }
    }

  contains(value) {

    let currentNode = this.root; // start here 

    while (!currentNode === null) { // traverse through - 
      
      if(value < currentNode.value) { // compare value w/ currentNode - if less than, move to the left. 
        currentNode = currentNode.left; // this is redefining currentNode to "move on" to the next left node. 
      }
      else if(value >= currentNode.value) { // ELSE if compare w/ currentNode - if greater than, move to the right. 
        currentNode = currentNode.right; // this is redefining currentNode to "move on" to the next right node. 
      }
      else if(value === currentNode.value){ // if the value we passed in === currentNode's value, we found it! Return true! 
        return true;
      }
    }

    return false; // If we have traversed through and cannot find our value, the loop ends and we return false. 
  }
  
 } 


// TESTING: Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab

// Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

// Write tests to prove the following functionality:

// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// Can successfully add a left child and right child to a single root node
// Can successfully return a collection from a preorder traversal
// Can successfully return a collection from an inorder traversal
// Can successfully return a collection from a postorder traversal
// Ensure your tests are passing before you submit your solution.