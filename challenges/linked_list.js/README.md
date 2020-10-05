# Challenge Summary
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. 

- Upon instantiation, an empty Linked List should be created.
- Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

## Challenge Description
- // PREORDER: We output the value first, check for a left, and then check for a right.  

    // create the array that the values will be stored in

    // function within a function --> takes in a node, checks to see if the node is valid (has a value), and if it does, we call our function preOrderAttempt on the root.left of the node. If it isn't valid, we return. 

    

## Approach & Efficiency
- The big O for this is O(n), since we do not now how many variables will be within the list.


<!-- ## Solution -->