class Tree {
    constructor() {
        this.count = 0;
        this.root;
    }

    insert(root, node) {
        if (!root) {
            return node;
        }
        if (node.data < root.data) {
            root.left = this.insert(root.left, node);
            return root;
        } else {
            root.right = this.insert(root.right, node);
            return root;
        }
    }

    add(data) {
        const node = new Node(data);
        if (this.count == 0) {
            this.root = node;
        } else {
            this.insert(this.root, node);
        }
        return ++this.count;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

var tree = new Tree();
tree.add(5); // 1
tree.add(3); // 2
tree.add(4); // 3
tree.add(2); // 4
tree.add(7); // 5
tree.add(6); // 6
console.log(tree.root.left.data); // 3
console.log(tree.root.left.left.data); // 2;
console.log(tree.root.left.right.data); // 4