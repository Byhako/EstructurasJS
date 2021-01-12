// push, agrega elemento al final
// pop, borra el ultimo elemento
// unshift, agrega elemento al inicio
// shift, borra primer elemento
// splice, agrega elemento en una parte del array

const array = [1, 2, 3];

class MyArray {
  constructor() {
  this.length = 0;
  this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.lengt++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for(let i=index ; i<this.length-1 ; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const myArray = new MyArray();

console.log(myArray.push(2));
console.log(myArray.get(0))