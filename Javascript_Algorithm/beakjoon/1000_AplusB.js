/**
 * https://www.acmicpc.net/problem/1000
 * 문제
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 * 입력
 * 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
 * 출력
 * 첫째 줄에 A+B를 출력한다.
 * ex 1+2 -> 3
 */

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
if (0 < a && b < 10) {
    console.log(a+b);
}
