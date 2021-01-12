// el ultimo en llegar es el primero en salir

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Selecciona un elemento
  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPoint = this.top;
      this.top = newNode;
      this.top.next = holdingPoint
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) {
      console.error('No hay nodos');
      return;
    }
    const value = this.top.value;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return value;
  }
}

const myStack = new Stack();

console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.pop());
console.log(myStack.push(3));
console.log(myStack.push(4));
console.log(myStack.peek());
