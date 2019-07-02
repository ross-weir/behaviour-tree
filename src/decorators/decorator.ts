import {Node} from "../node";

export abstract class DecoratorNode extends Node {
  constructor(public readonly child: Node) {
    super();
  }
}
