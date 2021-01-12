// el primero en llegar es el primero en salir
// enqueue --> agrega elemento al final
// dequeue --> borrar primer elemento
// peek --> tomar el primer elemento

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enQueue(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  deQueue() {
    if (!this.length) {
      console.error('No hay elementos');
      return;
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return this;
  }
}

const myQueue = new Queue();

console.log(myQueue.enQueue(1));
console.log(myQueue.enQueue(2));
