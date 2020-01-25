import {Node} from "../node";

export abstract class DecoratorNode<T> extends Node<T> {
  constructor(protected readonly child: Node<T>) {
    super();
  }
}
