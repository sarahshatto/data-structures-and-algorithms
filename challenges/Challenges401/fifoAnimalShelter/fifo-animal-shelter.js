'use strict';
const Node = require("../linked_list.js/node");

 
class Animal {
  constructor(name){
    this.name = name; // name to simplify storing later/tests
  }
}

class Cat extends Animal {
  constructor(name){
    super(name);
    this.type = "cat";
  }
}

class Dog extends Animal {
  constructor(name){
    super(name);
    this.type = "dog";
  }
}


class AnimalShelter {
  constructor(){
    this.firstAnimal = null;
    this.lastAnimal = null;
  }


  enqueue(animal){
    if(this.firstAnimal === null){
      this.firstAnimal = new Node(animal);
      this.lastAnimal = this.firstAnimal;
    }
    else {
      this.lastAnimal.next = new Node(animal);
      this.lastAnimal = this.lastAnimal.next;
    }
  }

  dequeue(pref){
    if(pref != "dog" && pref != "cat"){
      if(this.firstAnimal === null){
        return null;
      }
      else {
        let adoptedAnimal = this.firstAnimal;
        this.firstAnimal = this.firstAnimal.next;
        return adoptedAnimal.value;
      }
    }

    let adoptedAnimal = this.firstAnimal;
    let prevAnimal = null;

    while (adoptedAnimal != null) {
      if(adoptedAnimal.value.type == pref){
        if(prevAnimal != null){
          prevAnimal.next = adoptedAnimal.next;
        }
        else {
          this.firstAnimal = adoptedAnimal.next;
        }

        return adoptedAnimal.value;
      }

      prevAnimal = adoptedAnimal;
      adoptedAnimal = adoptedAnimal.next;
    }

    return null;
  }
}