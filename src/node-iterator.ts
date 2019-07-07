import {Node} from "./node";

export class NodeIterator<Collection = Node> implements Iterable<Collection> {
  private currentPointer = 0;

  constructor(private collection: Collection[]) {}

  public [Symbol.iterator](): Iterator<Collection> {
    return {
      next: (): IteratorResult<Collection> => {
        if (this.hasNext) {
          this.incrementPointer();
          return {done: false, value: this.current};
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

  private incrementPointer() {
    this.currentPointer++;
  }

  private get hasNext() {
    return !!this.collection[this.currentPointer + 1];
  }
}
