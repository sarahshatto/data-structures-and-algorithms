'use strict'; 

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
    let preOrderResults = [];


    const _preOrderAttempt = (node) => {
      if (node === null) { return; }

      preOrderResults.push(node.value);
    
      _preOrderAttempt(node.left); 
      _preOrderAttempt(node.right); 
    }
    _preOrderAttempt(this.root); 
    return preOrderResults;
  }

    
  inOrder(){ 
    let inOrderResults = [];

    const _inOrderAttempt = (node) => {
      if (node === null) { return; }

      _inOrderAttempt(node.left);

      inOrderResults.push(node.value);

      _inOrderAttempt(node.right); 
    }
    _inOrderAttempt(this.root); 
    return inOrderResults;
  }

    
  postOrder(){
    let postOrderResults = [];

    const _postOrderAttempt = (node) => {
      if (node === null) { return; }

      _postOrderAttempt(node.left);

      _postOrderAttempt(node.right);
      
      postOrderResults.push(node.value); 
    }

    _postOrderAttempt(this.root); 
    return postOrderResults;
  }
  
  }


 class BinarySearchTree extends BinaryTree {
    constructor(node = null){
      super(node);
    }
  

    add(value){
      let newNode = new Node(value);
      
      if (this.root == null) { 
        this.root = newNode; 
        return; 
      }
      

      let currentNode = this.root; // Starting point is defined: at the root
      let previousNode = this.root; // This will be a reference to the previous node, but needs to start at the same spot
      
      while (currentNode !== null) { // traverse through - 
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

    while (currentNode !== null) { // traverse through - 
      
      if(value < currentNode.value) { // compare value w/ currentNode - if less than, move to the left. 
        currentNode = currentNode.left; // this is redefining currentNode to "move on" to the next left node. 
      }
      else if(value > currentNode.value) { // ELSE if compare w/ currentNode - if greater than, move to the right. 
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