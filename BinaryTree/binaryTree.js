class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
        this.root = null;
    }
  
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;  
        }
  
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    // return this, which ends the function and confirms the insertion is complete.
                    return this; 
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
  
    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
  
    // In-order traversal (Left, Root, Right)
    inOrderTraversal(node = this.root, result = []) {
        if (node) { 
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
  
    // Pre-order traversal (Root, Left, Right)
    preOrderTraversal(node = this.root, result = []) {
        if (node) {
            result.push(node.value); // added node 10
            this.preOrderTraversal(node.left, result); // call for left childs 5, 3, 7
            this.preOrderTraversal(node.right, result); // call for right childs 15, 12, 18
        }
        return result;
    }
  
    // Post-order traversal (Left, Right, Root)
    postOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.postOrderTraversal(node.left, result);  // call for left childs  3, 7, 5
            this.postOrderTraversal(node.right, result); //call for right childs  12, 18, 15
            result.push(node.value); // added node 10
        }
        return result;
    }
  }
  
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(18);
  console.log(tree.root)
  
  console.log("search of 7: " + tree.search(7));
  console.log("search of 20: " + tree.search(20));
  
  console.log("In-order:", tree.inOrderTraversal());
  console.log("Pre-order:", tree.preOrderTraversal()); 
  console.log("Post-order:", tree.postOrderTraversal()); 