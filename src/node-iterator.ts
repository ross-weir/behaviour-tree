import {Node} from "./node";

export class NodeIterator implements Iterable<Node> {
  private currentPointer = 0;

  constructor(private nodes: Node[]) {}

  private incrementPointer() {
    this.currentPointer++;
  }

  private get hasNext() {
    return !!this.nodes[this.currentPointer + 1];
  }

  public [Symbol.iterator](): Iterator<Node> {
    const self = this;

    return {
      next(): IteratorResult<Node> {
        if (self.hasNext) {
          self.incrementPointer();
          return {done: false, value: self.current};
        }

        return {done: true, value: null};
      },
    };
  }

  public get current() {
    return this.nodes[this.currentPointer];
  }

  public next() {
    if (this.hasNext) {
      this.incrementPointer();

      return true;
    }

    return false;
  }

  public reset() {
    this.currentPointer = 0;
  }
}
