class Node {
  constructor(value, k) {
      this.value = value;
      this.chillinsArray = [ ];
      for(let i = 0; i < k; i++) {
          this.chillinsArray.push(null);
      }
  }
}

class kTree {
  constructor(k, node = null) {
  this.root = node;
  this.maxChillins = k;
  }

  add(value){
      let newNode = new Node(value, this.maxChillins );

      if (this.root == null) {
          this.root = newNode;
          return;
      }

      let kanarytreeQueue = [this.root];


      while(kanarytreeQueue.length > 0) {
          let front = kanarytreeQueue.shift();

          for(let i = 0; i < front.chillinsArray.length ; i++) {
              if (front.chillinsArray[i] == null){
                  front.chillinsArray[i] = newNode;
                  return;
              }
              else{
                  kanarytreeQueue.push(front.chillinsArray[i]);
              }
          }
      }
  }
}

function fizzBuzz(tree) {
  
  let treeQueue = [tree.root];
  let iam = tree.root;

  let secondTree = new kTree(tree.maxChillins);
  
  while (treeQueue.length > 0) {
      let front = treeQueue.shift();

if(front.value % 15 === 0){
secondTree.add('Fizz Buzz');
}
else if(front.value % 5 === 0){
secondTree.add('Buzz');
}
else if(front.value % 3 === 0){
secondTree.add('Fizz');
}
else {
secondTree.add(front.value.toString());
}
      
      for(let i = 0; i < front.chillinsArray.length ; i++) {
          if (front.chillinsArray[i] !== null){
              kanarytreeQueue.push(front.chillinsArray[i]);
          }

      }

  }
return secondTree;
}

modules.exports = {kTree, fizzBuzz};