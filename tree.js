// binary search trees
// al lado derecho aumentan los numeros al ir bajando
// al lado izquierdo disminuye el numero al ir bajando

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value) {
    if (!this.root) {
      return 'El arbol no tiene nodos';
    } else {
      let currentNode = this.root;
      while (true) {
        if (value === currentNode.value) {
          return currentNode;
        }
        // busco al lado izquierdo
        if (value < currentNode.value) {
          // si hay numero al lado izquiedo
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            return 'Elemento no encontrado';
          }
        // busco al lado derecho
        } else {
          // si hay numero al lado derecho
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            return 'Elemento no encontrado';
          }
        }
      }
    }
  }
}

const tree = new Tree();

console.log(tree.search(10));
// console.log(tree.insert(10));
// console.log(tree.insert(4));
// console.log(tree.insert(20));
tree.insert(10)
tree.insert(4)
tree.insert(20)
console.log(tree.search(10));
console.log(tree.search(4));
console.log(tree.search(8));


// console.log(tree.insert(15));
// console.log(tree.insert(7));
