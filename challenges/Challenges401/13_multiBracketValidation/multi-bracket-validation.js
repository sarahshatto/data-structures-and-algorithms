'use strict'


multiBracketValidation = function(string) {
	// Define two arrays with open and close bracket types
  // Make sure their indicies in the array match
	let openBrackets =  [ '(', '{', '[' ];
	let closeBrackets = [ ')', '}', ']' ];
  
  // Keep an array of the brackets we find along the way
  let foundBrackets = [];
  
  for(let i = 0; i < string.length; i++) {
  	// If this is an open bracket, add it to our list
  	if(openBrackets.includes(string[i])) {
    	let bracketType = openBrackets.indexOf(string[i]);
    	foundBrackets.push(bracketType);
    }
    // If this a close bracket...
  	else if(closeBrackets.includes(string[i])) {
    	// If we have no open brackets, this is not balanced
    	if(foundBrackets.length === 0) {
      	return false;
      }
      
      // If the last entry of our brackets (open bracket index) doesn't
      // match the closing, then this isn't balanced
    	let bracketType = closeBrackets.indexOf(string[i]);
      let lastBracket = foundBrackets.pop();
      
      if(bracketType != lastBracket) {
      	return false;
      }
    }
  }
  
  // If we have no more entries (open brackets), then we're not balanced
  // If we have no entries left, then it is balanced
  return foundBrackets.length === 0;
};







// GOAL: 
// Your function should take a stringing as its only argument, and should return a boolean representing whether or not the brackets in the stringing are balanced. There are 3 types of brackets: (), [], {} . 