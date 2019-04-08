/**
 * https://www.acmicpc.net/problem/1000
 * 문제
 * 조규현과 백승환은 터렛에 근무하는 직원이다. 하지만 워낙 존재감이 없어서 인구수는 차지하지 않는다. 다음은 조규현과 백승환의 사진이다.
 * 이석원은 조규현과 백승환에게 상대편 마린(류재명)의 위치를 계산하라는 명령을 내렸다. 조규현과 백승환은 각각 자신의 터렛 위치에서 현재 적까지의 거리를 계산했다.
 * 조규현의 좌표 (x1, y1)와 백승환의 좌표 (x2, y2)가 주어지고, 조규현이 계산한 류재명과의 거리 r1과 백승환이 계산한 류재명과의 거리 r2가 주어졌을 때, 류재명이 있을 수 있는 좌표의 수를 출력하는 프로그램을 작성하시오.
 * 
 * 입력
 * 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 다음과 같이 이루어져 있다.
 * 한 줄에 x1, y1, r1, x2, y2, r2가 주어진다. x1, y1, x2, y2는 -10,000보다 크거나 같고, 10,000보다 작거나 같은 정수이고, r1, r2는 10,000보다 작거나 같은 자연수이다.
 * 출력
 * 각 테스트 케이스마다 류재명이 있을 수 있는 위치의 수를 출력한다. 만약 류재명이 있을 수 있는 위치의 개수가 무한대일 경우에는 -1을 출력한다.
 * ex) 
 * 3
 * 0 0 13 40 0 37 -> 2
 * 0 0 3 0 7 4 -> 1
 * 1 1 1 1 1 5 -> 0
 */
var line = require('fs').readFileSync('./test','utf8');
var data = line.split("\n");
var len = parseInt(data[0]);
for (var i=0; i<len; i++) {
    var input = data[i+1].trim().split(' ');
    var x1 = parseInt(input[0]);
    var y1 = parseInt(input[1]);
    var r1 = parseInt(input[2]);
    var x2 = parseInt(input[3]);
    var y2 = parseInt(input[4]);
    var r2 = parseInt(input[5]);
    
    /**
     * 두 원의 관계를 묻는 문제.
     * 두 원이 한점과 만나는 경우. -> 내접, 외접
     * 두 원이 두점과 만나는 경우.
     * 큰 원이 작은 원을 포함하는 경우.
     * 두 원이 아예 떨어져 있는 경우.
     * 두 원이 같은 경우. (무한대)
     * */ 
    
    var distance = Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2));
    var sum = r1 + r2;
    var sub = Math.abs(r1 - r2);
    var count = 0;
    
    if (x1 == x2 && y1 == y2) {
        if (r1 == r2) {
            count = -1;
        } else {
            count = 0;
        }
    } else {
        if (sub < distance && distance < sum) {
            count = 2;
        } else if (sum == distance || sub == distance) {
            count = 1;
        } else if (sum < distance || sub > distance) {
            count = 0;
        }
    }
    console.log(count);
}