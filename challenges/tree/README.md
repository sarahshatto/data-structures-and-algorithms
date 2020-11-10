# Challenge Summary
- CODE CHALLENGE GOALS: 
  - Create a Node class that has properties for the value stored in the node, the left child node, and the right child node
  - Create a BinaryTree class: 
    - Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

  - Create a BinarySearchTree class
    - Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
  - Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Challenge Description
- **Class Binary Tree:**
- **PREORDER METHOD:** We output the value first, check for a left, and then check for a right.  

    - create the array that the values will be stored in
    - Recursion: function within a function --> takes in a node, checks to see if the node is valid (has a value), and if it does, we call our function preOrderAttempt on the root.left of the node. If it isn't valid, we return. 
    - preOrderResults.push(node.value);
      - This is how we output the value
    - _preOrderAttempt(node.left);
      - this asks the question: Does this node have a child to the left? If so, move to that child and run _preOrderAttempt on it. 
    - repeat for right 
  - the _preOrderAttempt function begins with a check to see if the node === null, so we don't need to use an if statement.
  - instantiate the function you just created, telling it to be called on this.root.
  - return the array you have pushed into. 

- **IN ORDER:** 
  - This is the same general process as the preorder method, but the order in which we generate the output is different. We check for a left, log the output, and then check for a right. 

- **POST ORDER:** 
  - Left, Right, then log the output. 


- **class Binary Search Tree:**
  - create a new node, calling back to the Node class, passing in a value
  - in the event that the list is empty .. aka there is no root. 
  - take the new node you just created and make it the root
  - there's no need to traverse, there's nothing in the list. 
  - find the correct location --> Binary Search Trees have organization. less than < Root < Greater than. 
  - comparing the current value against the current node - greater than/less than


## Approach & Efficiency
- The big O for this is O(n), since we do not now how many variables will be within the list.
