'use strict'

const fizzBuzz = require('../fizz-buzz-tree');

function treeToStringOutput(tree) {
  let output = [];

  let nodes = [tree.root];

  while (nodes.length > 0) {
    let currentNode = nodes.shift();

    for (let i = 0; i < currentNode.children.length; i++) {
      if (currentNode.children[i] != null) {
        nodes.push(currentNode.children[i]);
      }
    }

    output.push(currentNode.value);
  }

  return output;
}

describe('testing ktree', () => {
  // it should be able to create a new tree

  test('creates a ktree', () => {
    let newTree = new fizzBuzz.kTree(5);

    expect(newTree).not.toBeNull();
  });

  // it should be able to add a node
  test('add a node', () => {


    // expect(__).not.toBeNull();
  });

});

describe('testing fizzBuzz', () => {




  // it should replace items divisible by 3 & 5 with 'Fizz Buzz'

  // it should replace items divisible by 3 with 'Fizz'

  // it should replace items divisible by 5 with 'Buzz'
  test('creates a ktree', () => {
    let newTree = new fizzBuzz.kTree(5);

    expect(newTree).not.toBeNull();
  });

  // it should be able to add a node
  test("k-ary tree nodes, k = 5", () => {
    let newTree = new karyTree(5);

    expect(newTree).not.toBeNull();

    newTree.addNode(0);
    newTree.addNode(1);
    newTree.addNode(2);
    newTree.addNode(3);
    newTree.addNode(4);
    newTree.addNode(5);
    newTree.addNode(6);
    /*
            0
        1 2 3 4 5
      6





    */

    let output = treeToStringOutput(newTree);

    expect(output).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });
});