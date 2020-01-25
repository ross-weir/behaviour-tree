import {Node} from "../node";

export class IndexSelectorNode<T> extends Node<T> {
  constructor(
    private readonly childIndex: () => number,
    protected readonly children: Array<Node<T>>
  ) {
    super();
  }

  public tick(bb: T) {
    return this.children[this.childIndex()].tick(bb);
  }
}
