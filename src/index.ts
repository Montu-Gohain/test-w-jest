const username: String = "Montu Gohain";
console.log("Hello there, Mr, ", username);

// Todo : Let's Create a Binary Tree Data structure and try to implemnt its important methods.

class Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST<T> {
  root: Node<T>;
  count: number;

  constructor(value: T) {
    this.root = new Node<T>(value);
    this.count = 1;
  }

  // Let's define the methods.
  size(): number {
    return this.count;
  }

  // Insert a new node.

  insert(value: T) {
    const newNode = new Node<T>(value);

    function checkNodes(node: Node<T>) {
      // Checking if currently we have nodes in the Tree or not.
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          checkNodes(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          checkNodes(node.right);
        }
      }
    }
    checkNodes(this.root);
    this.count++;
  }

  // Contains methods : To check if a value exist in the Tree or not.

  contains(value: T): boolean {
    let currentNode: Node<T> | null = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  // Traversal Algorithms, There are mainly Two types of Traversal Algorithm : BFS and DFS

  // Breadth First Search or BFS

  BFS(): T[] {
    let result: T[] = [];
    let queue: Node<T>[] = [];

    queue.push(this.root);

    while (queue.length) {
      const currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }

  // Todo : In DFS , there are total three variants , In order, Pre order and Post order.
  // In Order : Left => Root => Right
  DFS_In_order(): T[] {
    let result: T[] = [];

    function traverse(node: Node<T>) {
      if (node.left) {
        traverse(node.left);
      }
      result.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }
  // Pre Order : Root => Left => Right
  DFS_Pre_order(): T[] {
    let result: T[] = [];

    function traverse(node: Node<T>) {
      result.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }
  // Post Order : Left => Right => Root
  DFS_Post_order(): T[] {
    let result: T[] = [];

    function traverse(node: Node<T>) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }
  // Let's print the minimum and maximum value present in the nodes of the Tree

  Min(): T {
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
  Max(): T {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
}

const binaryTree = new BST(1);
binaryTree.insert(7);
binaryTree.insert(9);
binaryTree.insert(2);
binaryTree.insert(6);
binaryTree.insert(5);
binaryTree.insert(11);
binaryTree.insert(9);
binaryTree.insert(9);
binaryTree.insert(5);
binaryTree.insert(34);

console.log("No of total nodes in the tree is : ", binaryTree.size());

let ans = binaryTree.BFS();
console.log("Binary Tree Traversal with BFS : ", ans);

console.log(
  `/n Minimum value in the Tree is : ${binaryTree.Min()} and Maximum value in the tree is : ${binaryTree.Max()}`
);
