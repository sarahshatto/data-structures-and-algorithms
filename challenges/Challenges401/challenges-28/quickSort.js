'Use Strict';

function quickSort(arr, leftIndex, rightIndex)

  if (leftIndex < rightIndex) {
    // Partition the array by setting the position of the pivot value 
    let position = partition(arr, leftIndex, rightIndex)
    quickSort (arr, leftIndex, position - 1)
    quickSort(arr, position + 1, rightIndex)
  }

/*
  arr = [4, 12, 17, 9, 13];
  leftIndex = 0;
  rightIndex = 4;

  pivot = 13; // arr[4]
  lowestIndex = -1; // 0 - 1

  for(i = 0; i < 4; i++) {
    if(arr[0] <= 13)
        lowestIndex = 0; // -1 ++
        swap(arr, 0, 0) -> arr[0] = arr[0]
    
    if(arr[1] <= 13)
        lowestIndex = 1 // 0 ++
        swap(arr, 1, 1)

    if(arr[2] <= 13)
        // do nothing
    
    if(arr[3] <= 13)
        lowestIndex = 2 // 1 ++
        swap(arr, 3, 2)
        arr = [4, 12, 9, 17, 13];
  }

  swap(arr, 4, 3 (2 + 1))
  arr = [4, 12, 9, 13, 17];
  return 3;


  arr = [4, 12, 9, 13, 17];
  leftIndex = 0;
  rightIndex = 2;

  pivot = 9;
  lowestIndex = -1

  for(let i = 0; i < 2; i++) {
      if(arr[0] < 9)
        lowestIndex = 0 (-1 ++)
        swap(arr, 0, 0)

      if(arr[1] < 9)
        // Nerfin'
  }

  swap(arr, 2, 1)
  arr = [4, 9, 12, 13, 17];

  return 1
*/

function partition(arr, leftIndex, rightIndex)
  let pivot = arr[rightIndex];
  let lowestIndex = leftIndex - 1;

  for (let i = leftIndex; i < rightIndex; i++){
    if (arr[i] <= pivot){
      lowestIndex++; 
      swap(arr, i, lowestIndex);
    }
  }
    swap(arr, rightIndex, lowestIndex + 1)
    return lowestIndex + 1; 

function swap(arr, i, lowestIndex){
  let temp;
  temp = arr[i];
  arr[i] = arr[lowestIndex];
  arr[lowestIndex] = temp;
  };

  module.exports = quickSort;
