/*
   2 - 0
  / \
 1 - 3
*/
// Edge list
const graph1 = [
  [0,2],
  [2,3],
  [2,1],
  [1,3]
];

// Adjacent list,  es por indices
const graph2 = [[2], [2,3], [0,1,3], [1,2]];

const graph3 = {
  0: [2],
  1: [2,3],
  2: [0,1,3],
  3: [1,2]
};

// Adjancent matrix
const graph4 = [
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0]
];

const graph5 = {
  0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0]
};

// Grafo no dirigido
class Grahp {
  constructor() {
    this.nodes = 0;
    this.adjacent = {};
  }

  addVertex(node) {
    this.adjacent[node] = [];
    this.nodes++;
    return this;
  }

  addEdge(node1, node2) {
    const nodes = Object.keys(this.adjacent);
    if (nodes.includes(node1) && nodes.includes(node2)) {
      this.adjacent[node1].push(node2);
      this.adjacent[node2].push(node1);
    } else {
      return 'Uno de los nodos no exite';
    }
  }

  show() {
    return this.adjacent;
  }
}

const graph = new Grahp();

console.log(graph.addVertex('1'));
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');
graph.addVertex('6');
graph.addVertex('8');

console.log(graph.addEdge('8', '40'))

graph.addEdge('8', '4');
graph.addEdge('4', '1');
graph.addEdge('4', '5');
graph.addEdge('5', '3');
graph.addEdge('1', '3');
graph.addEdge('1', '6');
graph.addEdge('3', '6');

console.log(graph.show());
