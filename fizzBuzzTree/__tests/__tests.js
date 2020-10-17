'use strict'

const fizzBuzz = require('../fizz-buzz-tree');

describe('testing ktree', () => {
  // Testing to see if tree stuff is legit 

  it('creates a ktree', () => {
    let newTree = new kTree(5);

    expect(newTree).not.toBeNull();
  });

  
})