class MyTable {
  constructor() {
    this.data = {};
  }

  set(key, value) {
    this.data[key] = value;
    return this.data;
  }

  get(key) {
    return this.data[key];
  }

  delete(key) {
    let keys = Object.keys(this.data);
    keys = keys.filter(ownkey => ownkey !== key);
    let newData = {};
    keys.forEach(item => newData[item] = this.data[item]);
    this.data = newData;
    return this.data;
  }
}

const myTable = new MyTable();

console.log(myTable.set('diego', 2020));
console.log(myTable.set('lala', 2003));
console.log(myTable.set('mariana', 2012));
console.log('Mariana: ', myTable.get('mariana'));
console.log('Toto: ', myTable.get('toto'));
console.log('delete: ', myTable.delete('mariana'));
