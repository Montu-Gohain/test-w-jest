// Todo : Let's implement Binary Tree data structure, along with some important methods , e. g. size, contains, max, min , and Traversal algorithms like Breadth first serach , Depth First search  : ir order, Pre order, Post order

class _Node_<T> {
  value: T;
  left: _Node_<T> | null;
  right: _Node_<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class _BST_<T> {
  root: _Node_<T>;
  count: number;

  constructor(value: T) {
    this.count = 1;
    this.root = new _Node_(value);
  }
  // Todo : Let's define some methods.

  size(): number {
    return this.count;
  }
  insert(value: T) {
    const new_node = new _Node_(value);

    function SearchNode(node: _Node_<T>) {
      // Now we'll check whether the value is less than or greater than the root node value.

      if (value < node.value) {
        if (!node.left) {
          node.left = new_node;
        } else {
          SearchNode(node.left);
        }
      } else {
        if (!node.right) {
          node.right = new_node;
        } else {
          SearchNode(node.right);
        }
      }
    }
    SearchNode(this.root);
  }
  contains(value: T): boolean {
    let current_node: _Node_<T> | null = this.root;

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
}
