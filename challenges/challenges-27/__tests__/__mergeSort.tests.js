'use strict';

const mergeSort = require('../merge-sort.js');

describe('Merge Sort Tests', () => {
    it('Writeup Test', () => {
        let testArr = [8,4,23,42,16,15];
        mergeSort(testArr);
        expect(testArr).toEqual([4, 8, 15, 16, 23, 42]);
    });

    it('Reverse-sorted', () => {
        let testArr = [20,18,12,8,5,-2];
        mergeSort(testArr);
        expect(testArr).toEqual([-2, 5, 8, 12, 18, 20]);
    });

    it('Few uniques', () => {
        let testArr = [5,12,7,5,5,7];
        mergeSort(testArr);
        expect(testArr).toEqual([5, 5, 5, 7, 7, 12]);
    });

    it('Nearly-sorted', () => {
        let testArr = [2,3,5,7,13,11];
        mergeSort(testArr);
        expect(testArr).toEqual([2, 3, 5, 7, 11, 13]);
    });
});