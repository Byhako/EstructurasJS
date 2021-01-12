// Lista por nodos
// cada nodo tiene su valor y el valor del siguiente nodo
// de esta forma cada nodo esta ligado al siguiente

// SINGLY LINKED LIST

let lista = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index < 0 || !Number.isInteger(index)) {
      return 'Indice incorrecto';
    }
    if (index === 0) {
      // agrego al inicio
      return this.prepend(value);
    }
    if (index >= this.length) {
      // agrego al final
       return this.append(value);
    }

    const newNode = new Node(value);
    const firstPoint = this.getTheIndex(index-1);
    const holdingPoint = firstPoint.next;
    firstPoint.next = newNode;
    newNode.next = holdingPoint;

    this.length++;
    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (this.length === 1) {
      return this;
    }
    if (index < 0 || !Number.isInteger(index)) {
      return 'Indice incorrecto';
    }
    if (index === 0) {
      // borro al inicio
      const firstPoint = this.getTheIndex(index+1);
      this.head = firstPoint;
      this.length--;
      return this;
    }
    if (index >= this.length) {
      // borro al final
      const lastPoint = this.getTheIndex(this.length-2);
      console.log(lastPoint)
      lastPoint.next = null;
      this.tail = lastPoint;
      this.length--;
      return this;
    }
    const firstPoint = this.getTheIndex(index-1);
    const holdingPoint = this.getTheIndex(index);
    firstPoint.next = holdingPoint.next;
    this.length--;
    return this;
  }
}

const myLista = new SinglyList(1);
console.log('agrego 2: ', myLista.append(2));
console.log('agrego 3: ', myLista.append(3));
console.log('inicio con 0: ', myLista.prepend(0));
console.log('inserto en 1: ', myLista.insert(1, 8));
console.log('inserto mal: ', myLista.insert('7', 8));
console.log('inserto al inicio: ', myLista.insert(0, 11));
console.log('inserto al final: ', myLista.insert(10, 10));
console.log('borro en 1: ', myLista.remove(1));
console.log('borro en 0: ', myLista.remove(0));
console.log('borro ultimo: ', myLista.remove(6));
console.log('borro ultimo: ', myLista.remove(6));
console.log('borro ultimo: ', myLista.remove(6));
console.log('borro ultimo: ', myLista.remove(6));
console.log('borro ultimo: ', myLista.remove(6));


// en una lista doble cada nodo tiene su valor, el siguiente
// y el anterior

class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new DoubleNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}
