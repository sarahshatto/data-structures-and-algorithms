'use strict'; 

it("should sort an unsorted array", () => {
  let unsortedArr = [8,4,23,42,16,15];
  insertionSort(testArr);
  expect(unsortedArr).toEqual([4, 8, 15, 16, 23, 42]);
});

