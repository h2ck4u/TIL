/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
let selfDividingNumbers = function (left, right) {
    const ans = [];
    for (let i = left; i <= right; i++) {
        if (i < 10) {
            ans.push(i);
        } else if (i % 10 != 0) {
            let splitNum = i.toString().split('');
            let selfDividing = splitNum.every(data => {
                return i % data == 0;
            });
            if (selfDividing) {
                ans.push(i);
            }
        }
    }
    return ans;
};

const assert = require('assert');
assert.deepStrictEqual(selfDividingNumbers(1, 22), [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);