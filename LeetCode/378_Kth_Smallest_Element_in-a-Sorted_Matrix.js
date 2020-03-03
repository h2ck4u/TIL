/**
 * 378. Kth Smallest Element in a Sorted Matrix
 * Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    return matrix.reduce((prev, curr) => {
        return prev.concat(curr);
    }, []).sort((a, b) => a - b)[k - 1];
};
const assert = require('assert');
assert.deepEqual(kthSmallest([
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
], 8), 13);