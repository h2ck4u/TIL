// BFS 구현 B -> Queue사용.

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
        this.marked = false;
    }
}

const queue = []; //선입 선출 -> shift()이용.
function bfs(node) {
    node.marked = true;

    queue.push(node);

    while (queue.length > 0) {
        const root = queue.shift();
        const left = root.left;
        const right = root.right;

        if (left && !left.marked) {
            console.log(left.data);
            queue.push(left);
        }
        if (right && !right.marked) {
            console.log(right.data);
            queue.push(right);
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

bfs(r);