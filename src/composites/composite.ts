import {Node} from "../node";

export abstract class Composite extends Node {
  children_: Node[];

  constructor(children: Node[]) {
    super();
    this.children_ = children;
  }
}
