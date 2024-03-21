// Todo : Graph Implementation using typescript.

interface DirectedNode {
  id: string;
  neighbors: {
    [neighborId: string]: number;
  };
}

class DirectedGraph {
  private nodes: {
    [nodeId: string]: DirectedNode;
  };

  constructor() {
    this.nodes = {};
  }

  // Todo : Let's define the methods.
  addNode(id: string): void {
    if (!this.nodes[id]) {
      this.nodes[id] = { id, neighbors: {} };
    }
  }
  addEdge(from: string, to: string, weight: number) {
    if (!this.nodes[from] || !this.nodes[to]) {
      throw new Error("Nodes not found");
    }
    this.nodes[from].neighbors[to] = weight;
  }
  printGraph(): void {
    for (const nodeId in this.nodes) {
      const node = this.nodes[nodeId];
      console.log(`Node ${node.id} : `);
      for (const neighborId in node.neighbors) {
        console.log(
          ` ==> ${neighborId} (weight : ${node.neighbors[neighborId]})`
        );
      }
    }
  }
}

const graph = new DirectedGraph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B", 4);
graph.addEdge("B", "C", 10);
graph.addEdge("B", "D", 3);
graph.addEdge("D", "E", 5);
graph.addEdge("C", "D", 9);

graph.printGraph();

interface personType {
  name: string;
  age: number;
  city: string;
}
