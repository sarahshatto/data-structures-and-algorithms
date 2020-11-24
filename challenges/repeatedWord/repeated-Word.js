'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        let newNode = new Node(value);

        if(this.head != null) {
            newNode.next = this.head;
        }

        this.head = newNode;
    }

    get(key) {
        // Assume that value for node is [key, value]
        let currentNode = this.head;

        while(currentNode != null) {
            if(currentNode.value[0] == key) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        // Not found
        return null;
    }
}

class HashTable {
    constructor(size) {
        this.storage = new Array(size);
        this.keys = new Array(0);
    }

    hashValue(key) {
        // TODO
        // Make this more balanced?
        return key.charCodeAt(0) % this.storage.length;
    }

    add(key, value) {
        let storageIndex = this.hashValue(key);

        if(this.storage[storageIndex] == null) {
            // Create a linked list here
            this.storage[storageIndex] = new LinkedList();
        }

        this.keys.push(key);

        this.storage[storageIndex].add([key, value]);
    }

    get(key) {
        let storageIndex = this.hashValue(key);

        if(this.storage[storageIndex] != null) {
            return this.storage[storageIndex].get(key);
        }

        return null;
    }
}

function findRepeatedWord(words) {
    let hashTable = new HashTable(26);

    // Split the words coming in
    let allWords = words.split(" ");

    for(let i = 0; i < allWords.length; i++) {
        let word = allWords[i].toLowerCase().replace('.', '').replace(',', '');
        if(hashTable.get(word) != null) {
            return word;
        }

        hashTable.add(word, word);
    }

    return null;
}

module.exports = findRepeatedWord;

/* 
// butts

let hashTable = [];
hashTable.length = 500;

function getHashValue(key) {
    // get the value of the first letter in the alphabet
    // 'Cooties' -> return 3
    // 'Dawg' -> return 4
    let firstLetter = key.charCodeAt(0);

    // ASCII
    firstLetter -= 65; // 65 = 'A'

    // This will return between 0 - 25
    return firstLetter % hashTable.length;
}

// Without hash - we need to check between 0-520,000 entries
// With hash - we need to get between 0-20,000 entries that start with the same letter

let key = 'Sarah Shattooooo';
// Iteration method # 1
for(let i = 0; i < hashTable.length; i++) {
    Node current = hashTable[i].head;

    while(current != null) {
        if(current.key === key) {
            return current.value;
        }

        current = current.next;
    }
}

// Method # 2
let index = getHashValue(key);

Node current = hashTable[index].head;

while(current != null) {
    if(current.key === key) {
        return current.value;
    }

    current = current.next;
}
*/