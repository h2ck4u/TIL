// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sum = ((A.length + 1) * (A.length + 2)) / 2;
    let tmp = 0;
    for (let i = 0; i < A.length; ++i) {
        tmp += A[i];
    }
    return sum - tmp;
}

solution([1, 2, 3, 5]);