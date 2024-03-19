var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/data_structures/BinaryTree.ts
var BinaryTree_exports = {};
__export(BinaryTree_exports, {
  _BST_: () => _BST_
});
module.exports = __toCommonJS(BinaryTree_exports);
var _Node_ = class {
  value;
  left;
  right;
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};
var _BST_ = class {
  root;
  count;
  constructor(value) {
    this.count = 1;
    this.root = new _Node_(value);
  }
  // Todo : Let's define some methods.
  size() {
    return this.count;
  }
  insert(value) {
    const new_node = new _Node_(value);
    function SearchNode(node) {
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
  contains(value) {
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
  min() {
    let current_node = this.root;
    while (current_node.left) {
      current_node = current_node?.left;
    }
    return current_node.value;
  }
  max() {
    let current_node = this.root;
    while (current_node.right) {
      current_node = current_node?.right;
    }
    return current_node.value;
  }
  // It's Time to traverse the tree
  // 1. DFS
  // In order : Left -> Root -> Right
  dfs_in_order() {
    let result = [];
    const traverse = (node) => {
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
  // Pre-order : Root -> Left -> Right
  dfs_pre_order() {
    let result = [];
    const traverse = (node) => {
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
  // Post order : Left -> Right -> Root
  dfs_post_order() {
    let result = [];
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      } else if (node.right) {
        traverse(node.right);
      }
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
  //2 . BFS
  bfs() {
    let result = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      const current_node = queue.shift();
      if (current_node) {
        result.push(current_node.value);
        if (current_node.left) {
          queue.push(current_node.left);
        }
        if (current_node.right) {
          queue.push(current_node.right);
        }
      }
    }
    return result;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  _BST_
});
