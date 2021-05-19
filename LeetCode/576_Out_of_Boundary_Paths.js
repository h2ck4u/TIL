/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */

const modulo = Math.pow(10,9)+7;
const findPaths = function(m, n, maxMove, startRow, startColumn) {
  let dp = fill2dArray(m, n);
  dp[startRow][startColumn] = 1;
  let count = 0;
  for (let move = 0; move < maxMove; move++) {
    const temp = fill2dArray(m,n);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          const mod = dp[i][j] % modulo;
            if (i === 0) count += mod;
            if (j === 0) count += mod;
            if (i === m-1) count += mod;
            if (j === n-1) count += mod;
            
            if (i > 0) temp[i][j] += dp[i-1][j] % modulo;
            if (j > 0) temp[i][j] += dp[i][j-1] % modulo;
            if (i < m-1) temp[i][j] += dp[i+1][j] % modulo;
            if (j < n-1) temp[i][j] += dp[i][j+1] % modulo;
        }
    }
    dp = temp;
  }

  return count % modulo;
};

const fill2dArray = (m, n) => new Array(m).fill().map(() => new Array(n).fill(0));

const assert = require('assert');
console.log(assert.deepStrictEqual(findPaths(2,2,2,0,0), 6));