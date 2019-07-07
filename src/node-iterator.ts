import {Node} from "./node";

export class NodeIterator<Collection = Node> implements Iterable<Collection> {
  private currentPointer = 0;

  constructor(private collection: Collection[]) {}

  private incrementPointer() {
    this.currentPointer++;
  }

  private get hasNext() {
    return !!this.collection[this.currentPointer + 1];
  }

  public [Symbol.iterator](): Iterator<Collection> {
    const self = this;

    return {
      next(): IteratorResult<Collection> {
        if (self.hasNext) {
          self.incrementPointer();
          return {done: false, value: self.current};
        }

        return {done: true, value: null};
      },
    };
  }

  public get current() {
    return this.collection[this.currentPointer];
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
