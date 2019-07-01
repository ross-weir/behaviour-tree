import {Node} from "../node";

export abstract class Decorator extends Node {
  child_: Node;

  constructor(child: Node) {
    super();
    this.child_ = child;
  }
}
