// Todo : Let's learn about graphs. There are two types of graphs, directed and undirected

// Directed graphs : In directed graph edges have a direction, meaning we can only travel from one node to another but not necessarily go back.
// Undirected grpahs : In undirected graph edges don't have any direction and bi-directional travel is possible.

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

  //   Todo : Let's add some methods.
  addNode(id: string): void {
    if (!this.nodes[id]) {
      this.nodes[id] = { id, neighbors: {} };
    }
  }

  addEdge(from: string, to: string, weight: number): void {
    if (!this.nodes[from] || !this.nodes[to]) {
      throw new Error("Nodes not found");
    }
    this.nodes[from].neighbors[to] = weight;
  }

  printGraph(): void {
    for (const nodeId in this.nodes) {
      const node = this.nodes[nodeId];
      console.log(`Node ${node.id} :  `);
      for (const neighborId in node.neighbors) {
        console.log(
          ` ---> ${neighborId} (weight : ${node.neighbors[neighborId]})`
        );
      }
    }
  }
}

// Todo : Example usage

const map = new DirectedGraph();

map.addNode("A");
map.addNode("B");
map.addNode("C");
map.addNode("D");
map.addNode("E");

map.addEdge("A", "B", 5);
map.addEdge("A", "C", 3);
map.addEdge("B", "D", 2);
map.addEdge("C", "D", 1);
map.addEdge("D", "E", 8);

console.log("Map Representation : ");
map.printGraph();
