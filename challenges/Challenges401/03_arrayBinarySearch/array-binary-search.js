// Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

// Do the binary search
function BinarySearch(array, value) {
  let min = 0;
  let max = array.length - 1;

  console.log(array);

  while(max >= min) {
    let mid = Math.ceil((max - min) / 2 + min);

    console.log(`min = ${min} ${array[min]} mid = ${mid} ${array[mid]} max = ${max} ${array[max]}`);

    // compare mid to value
    if(value > array[mid]) {
      // eliminate the back half of the array
      min = mid + 1;
    } else if(value < array[mid]) {
      // eliminate the front half of the array
      max = mid - 1;
    }
    else {
      return mid;
    }
  }

  // buttsky
  return -1;
}