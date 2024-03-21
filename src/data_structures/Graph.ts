// Todo : Let's implement graphs. There are mainly two types of graphs : Directed and Undirected.

// Todo : Graph, mainly of two types : Directed and Undirected graph

interface DirectedNode {
  id: string;
  neighbors: {
    [neighboreId: string]: number;
  };
}

class DirectedGraph {
  private nodes: {
    [nodeId: string]: DirectedNode;
  };

  constructor() {
    this.nodes = {};
  }

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
      console.log(`Node ${node.id}:`);
      for (const neighborId in node.neighbors) {
        console.log(
          `  -> ${neighborId} (weight: ${node.neighbors[neighborId]})`
        );
      }
    }
  }
}

// Example usage
const map = new DirectedGraph();

map.addNode("A");
map.addNode("B");
map.addNode("C");
map.addNode("D");

map.addEdge("A", "B", 5);
map.addEdge("A", "C", 3);
map.addEdge("B", "D", 2);
map.addEdge("C", "D", 1);

console.log("Map Representation:");
map.printGraph();
