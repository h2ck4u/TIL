// DFS 구현 D -> Stack사용.

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
        this.marked = false;
    }
}

const stack = []; //선입 후출 ->  pop()이용.
function dfs(node) {
    node.marked = true;
    stack.push(node);
    while (stack.length > 0) {
        const root = stack.pop();
        const left = root.left;
        const right = root.right;
        if (right && !right.marked) {
            console.log(right.data);
            stack.push(right);
        }
        if (left && !left.marked) {
            console.log(left.data);
            stack.push(left);
        }


    }
}

const r = new Node(0);
const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(7);
const n8 = new Node(8);

r.left = n1;
r.right = n2;
n1.left = n3;
n1.right = n4;
n2.left = n5;
n2.right = n6;
n3.left = n7;
n3.right = n8;

dfs(r);