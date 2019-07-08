import {Node} from "../node";

export abstract class DecoratorNode extends Node {
  constructor(protected readonly child: Node) {
    super();
  }
}
