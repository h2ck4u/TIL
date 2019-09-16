function solution(S) {
    function isEven(n) {
        return n % 2 == 0;
    }

    let V = parseInt(S, 2);
    let count = 0;
    while (V !== 0) {
        count++;
        V = isEven(V) ? V / 2 : V - 1;
    }

    return count;
}

solution('011100');