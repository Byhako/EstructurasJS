// La única diferencia es que, a la “key” que tu le pases se le va a aplicar
// una función que convertirá esa key en una referencia de memoria que es en
// donde se guardarán los valores que tu les pases.

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hasMethod(key) {
    let hash = 0;
    for (let i=0 ; i<key.length ; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hasMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this.hasMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i=0 ; i<currentBucket.length ; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myTable = new HashTable(50);

console.log(myTable.set('diego', 2020));
console.log(myTable.set('lala', 2003));
console.log(myTable.set('mariana', 2012));
console.log('Mariana: ', myTable.get('mariana'));
console.log('Toto: ', myTable.get('toto'));
