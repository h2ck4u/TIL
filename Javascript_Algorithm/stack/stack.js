/**
 * stack이란?
 * 스택(Stack)의 연산
 * 스택(Stack)는 LIFO(Last In First Out) 를 따른다. 즉, 가장 최근에 스택에 추가한 항목이 가장 먼저 제거될 항목이다.
 * pop(): 스택에서 가장 위에 있는 항목을 제거한다.
 * push(item): item 하나를 스택의 가장 윗 부분에 추가한다.
 * peek(): 스택의 가장 위에 있는 항목을 반환한다.
 * isEmpty(): 스택이 비어 있을 때에 true를 반환한다.
 * 스택(Stack)의 구현
 * 문제의 종류에 따라 배열보다 스택에 데이터를 저장하는 것이 더 적합한 방법일 수 있다.

 * 배열과 달리 스택은 상수 시간에 i번째 항목에 접근할 수 없다.
 * 하지만 스택에서 데이터를 추가하거나 삭제하는 연산은 상수 시간에 가능하다.
 * 배열처럼 원소들을 하나씩 옆으로 밀어 줄 필요가 없다.
 * 스택(Stack)은 연결리스트 로 구현할 수 있다. 연결리스트의 같은 방향에서 아이템을 추가하고 삭제하도록 구현한다.
 */

class Stack {
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