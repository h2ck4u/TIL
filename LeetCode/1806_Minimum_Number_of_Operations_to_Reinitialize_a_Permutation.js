var reinitializePermutation = function(n) {
  const arr = Array.from({length: n}, (v, i) => i);
  let perm = [];
  let count = 0;
  
  while (arr.toString() !== perm.toString()){
    perm = operator(perm.length === 0 ? arr : perm);
    count++;
  }

  return count;
};

var operator = (arr) => arr.map((v,i) => {
  if (v % 2 === 0) {
      return v /2;
  } else {
      return (arr.length / 2 + (v-1) / 2);
  }
});

const assert = require('assert');
assert.deepStrictEqual(reinitializePermutation(2), 1);
assert.deepStrictEqual(reinitializePermutation(6), 4);