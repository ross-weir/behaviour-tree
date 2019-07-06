import {Node} from "../node";
import {NodeIterator} from "../node-iterator";

export abstract class CompositeNode extends Node {
  protected nodeIterator: NodeIterator;

  constructor(public readonly children: Node[]) {
    super();
    this.nodeIterator = new NodeIterator(children);
  }
}
