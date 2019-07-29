/**
 * Stack은 LIFO원리에 따라 정렬된 컬렉션이다.
 * 스택의 자료는 항상 동일한 종단점에서 추가/삭제된다.
 * 스택에서 종단점은 꼭대기(top)과 바닥(base) 둘 뿐인데, 가장 최근 자료는 꼭대기 근처에, 가장 오래된 자료는 바닥 근처에 위치한다.
 * push(): 스택 꼭대기(top)에 새 원소를 추가한다.
 * pop(): 스택 꼭대기에 있는 원소를 반환하고 해당 원소는 스택에서 삭제한다.
 * peek(): 스택 꼭대기에 있는 원소를 반환하되, 스택은 변경하지 않는다. (삭제하지 않는다.)
 * isEmpty(): 스택에 원소가 하나도없으면 true, 스택의 크기가 0보다 크면 false를 반환한다.
 * clear(): 스택의 모든 원소를 삭제한다.
 * size(): 스택의 원소 개수를 반환한다. 배열의 length 프로퍼티와 비슷하다.
 * 스택(Stack)의 구현
 * 문제의 종류에 따라 배열보다 스택에 데이터를 저장하는 것이 더 적합한 방법일 수 있다.

 * 배열과 달리 스택은 상수 시간에 i번째 항목에 접근할 수 없다.
 * 하지만 스택에서 데이터를 추가하거나 삭제하는 연산은 상수 시간에 가능하다.
 * 배열처럼 원소들을 하나씩 옆으로 밀어 줄 필요가 없다.
 * 스택(Stack)은 연결리스트 로 구현할 수 있다. 연결리스트의 같은 방향에서 아이템을 추가하고 삭제하도록 구현한다.
 */

class Stack_es6 {
    constructor() {
        this.dataList = [];
        this.top = -1;
    }

    push(data) {
        this.top++;
        this.dataList[this.top] = data;
    }

    pop() {
        let value = null;
        if (this.dataList.length > 0) {
            value = this.dataList[this.top];
            this.top--;
            this.dataList.pop();
        }
        return value;
    }

    peek() {
        return this.dataList[this.top];
    }

    isEmpty() {
        return this.dataList.length === 0;
    }
}

function Stack_es5() {
    let items = [];

    this.push = function (element) {
        items.push(element);
    }

    this.pop = function () {
        return items.pop();
    }

    this.peek = function () {
        return items.peeek(items.length - 1);
    }

    this.isEmpty = function () {
        return items.length === 0;
    }

    this.clear = function () {
        items = [];
    }

    this.size = function () {
        return items.length;
    }
}

class Stack_fn {
    constructor() {
        this.values = [];
        this.top = 0;
    }

    push(element) {
        this.values[this.top++] = element;
    }

    pop() {
        return this.values[--this.top];
    }

    values() {
        return this.values;
    }
}