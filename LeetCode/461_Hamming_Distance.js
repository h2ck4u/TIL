/**
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * Given two integers x and y, calculate the Hamming distance.
 * https://en.wikipedia.org/wiki/Hamming_distance
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    return (x ^ y).toString(2).split('').filter(num => num === "1").length;
};

const assert = require('assert');
assert.deepEqual(hammingDistance(1, 4), 2);