// Todo : Let's Implement a Binary Search Tree using Typescript.

class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode;
  count: number;

  constructor(value: number) {
    this.root = new TreeNode(value);
    this.count = 1;
  }

  // Todo : Let's define the important methods that Each BST should have.
  // 1. Size : It returns the total number of nodes present in the Tree.

  size(): number {
    return this.count;
  }

  // 2. Insert : Using this we can insert a value by creating a new node, which will satisfty the core nature of binary Tree.

  insert(value: number) {
    const new_node = new TreeNode(value);

    function check_nodes(node: TreeNode) {
      // We'll add this new value to the left of the Binary Tree.
      if (value < node.value) {
        // Checking for the existing nodes to the left side.
        if (!node.left) {
          node.left = new_node;
        } else {
          check_nodes(node.left);
        }
      }
      // We'll add this new value to the right of the Binary Tree.
      else if (value > node.value) {
        // Checking for the existing nodes to the right side.
        if (!node.right) {
          node.right = new_node;
        } else {
          check_nodes(node.right);
        }
      }
    }

    check_nodes(this.root);
    this.count++;
  }

  // 3. Contains : Using this method we can check whether a value exist in the tree or not.
  contains(value: number) {
    let current_node = this.root;

    while (current_node) {
      if (value === current_node.value) {
        return true;
      } else if (value < current_node.value) {
        current_node = current_node.left;
      } else if (value > current_node.value) {
        current_node = current_node.right;
      }
    }
    return false;
  }

  // Min and Max : These functions will return the minimum and maximum value present in the Tree.
  min(): number {
    let current_node = this.root;
    while (current_node.left) {
      current_node = current_node.left;
    }
    return current_node.value;
  }
  max(): number {
    let current_node = this.root;
    while (current_node.right) {
      current_node = current_node.right;
    }
    return current_node.value;
  }

  // Tree Traversal Algorithms : Breadth First Search(levelOrder) and Depth First Search

  Breadth_first_search(): number[] {
    let result: number[] = [];
    let queue: TreeNode[] = [this.root];

    while (queue.length) {
      const current_node = queue.shift();
      result.push(current_node.value);

      if (current_node.left) {
        queue.push(current_node.left);
      }

      if (current_node.right) {
        queue.push(current_node.right);
      }
    }

    return result;
  }

  // For Depth first search there are total three variations. In order , pre order and post order.

  DFS_in_order(): number[] {
    let result: number[] = [];

    const traverse = (node: TreeNode) => {
      // IN DFS : In order => Left => Root => Right

      if (node.left) {
        traverse(node.left);
      }

      result.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return result;
  }

  DFS_pre_order(): number[] {
    let result: number[] = [];

    const traverse = (node: TreeNode) => {
      // In DFS pre order : Left =>  Right => Root
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  DFS_post_order(): number[] {
    let result: number[] = [];

    const traverse = (node: TreeNode) => {
      // In DFS post order : Root => Left => Right

      result.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }
}

const myTree = new BinarySearchTree(10);

// ? Testing : Size methods.
let ans: any = myTree.size();
console.log(`Currently there are total  : ${ans} in the tree`);

// ? Testing : Insert method.

myTree.insert(5);
myTree.insert(15);
ans = myTree.size();
console.log(`Currently there are total  : ${ans} in the tree`);

// ? Testing : Contains method.

ans = myTree.contains(15);
console.log(`The tree contains 15 , which is a ${ans} statement.`);

// ? Testint min and max methods.

ans = `The minimum value present in the Tree is ${myTree.min()} and the maximum value present in the tree is : ${myTree.max()}`;
console.log(ans);

// ? Testing : Breadth First Search

console.log("In Breadth first search : ", myTree.Breadth_first_search());

// ? Testing : Depth first search

console.log("In order DFS : ", myTree.DFS_in_order());
console.log("Pre order DFS : ", myTree.DFS_pre_order());
console.log("Post order DFS : ", myTree.DFS_post_order());
