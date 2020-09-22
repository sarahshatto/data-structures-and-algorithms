'use strict';

multiBracketValidation = function(str) {
  let bracketUses = 0;

  for(let i = 0; i < str.length; i++) {
    if(str[i] == '[') {
      bracketUses++;
    }
    else if(str[i] == ']') {
      bracketUses--;
    }
  }

  return bracketUses == 0;
};