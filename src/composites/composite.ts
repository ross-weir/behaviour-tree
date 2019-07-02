import {Node} from "../node";

export abstract class CompositeNode extends Node {
  constructor(public readonly children: Node[]) {
    super();
  }
}
