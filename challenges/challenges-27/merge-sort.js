'use strict';

function Mergesort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.ceil(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    Mergesort(left); // sort the left
    Mergesort(right); // sort the right
    Merge(left, right, arr);
  }
}

function Merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;

  }
  if (i == left.length) {
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }

  } else {
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  };
};

module.exports = Mergesort;