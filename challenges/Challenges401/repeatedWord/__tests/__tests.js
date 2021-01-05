'use strict';

const findRepeatedWord = require("../repeated-Word.js");

describe('Repeated word tests', () => {
  it('Short sentence', () => {
      const testCase = "Once upon a time, there was a brave princess who...";

      let repeatedWord = findRepeatedWord(testCase);

      expect(repeatedWord).toBe('a');
  });

  it('Tale of Two Cities', () => {
      const testCase = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";

      let repeatedWord = findRepeatedWord(testCase);

      expect(repeatedWord).toBe('it');
    });

    it('Third Example', () => {
      const testCase = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
      let repeatedWord = findRepeatedWord(testCase);

      expect(repeatedWord).toBe('summer');
    });    
});

/*
function dupes (string) {
  let hashtable = new Hashtable(2000);
  let stringArray = str.split(' ');

  for(let i=0; 1 < stringArray.length; i++) {
    if(!hashtable.set(stringArray[i], stringArray[i])) {
      return stringArray[i];
    }
  }
}

console.log(dupes("Once upon a time, there was a brave princess who..."))
*/