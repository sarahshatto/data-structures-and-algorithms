// testing 1 2
// yo 
// I'm working on setting up the whiteboard- I wasn't expecting you to be ready this fast! 
// Take your time, I'm going to plan on what I'd do locally and we can sync u


// Takes in the two hashmaps 
function leftJoin(hM1, hM2) {
  // I'm creating a place for everything to live. 
  let outputArr = []; 
  let innerArr = [];

  // loop through HM1 keys
  for(let i=0; i < hM1.length; i++){
    let hM1Key = hM1[i];
    // somehow grab the value too? 
    let hm1Value = '' // ....figure that out  
    // once I have the key and value... push it into the array
    innerArr.push(hM1Key, hm1Value);

    //asks the question.....♥    
    if (hM2.contains(hm1.Key)) {
      innerArr.push(/* put that value in there too*/ );
    } else {
      // if it doesn't have the value, give out Null 
      innerArr.push('NULL');
    }
    // oh shit I ~think~ know you got it ♥
    // clapping.gif
    outputArr.push(innerArr)
  }
  
}

// loop HM1.length.keys or something

// GOALS: 
//  Loop through HM1 
//  // Store the Key and Value in a new Array within outputArr
//  // Ask the Q: <-- does this key also live in HM2? 
// Choose your own adventure:
    // YES! //         
    // Sick! Append to corresponding Row/array

    // No // 
    // Return "NULL" to corresponding Row/Array
class HashTable {
    constructor() {
        // we are determining the overall size of the hash table/ the size of the array/data structure we've chosen for the hash table
        // what if here we also save an array of the keys for this HashTable
        this.size = size;
        this.storage = new Array(size);
        this.keys = [];
    }

    // we add something to a hash table
    // add("butts", "big")
    // we make a hash value for "butts" -> index
    // so maybe "butts" turns into 68
    // this.storage[68] => "big"
    // this.keys.add("butts")
    // so that later we can look up "butts"
    // and it can give us index # 68's value
    // which is "big"

    // this.keys = ["fond", "wrath", "diligent", ...]

    // (let i = 0; i < hashTable.keys.length; i++) 
    //  hashTable.keys[0] // "fond"

    add(key, value) {
       
        // store the stuff in a node within a linked list assosciated to the index

        // and what if after we store the data in the hash table, we save the key in our array
        this.keys.push(key);
    }

    get(key) {
       
    }
}