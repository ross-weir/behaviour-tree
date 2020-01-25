import {NodeState} from "./node-state.enum";

/**
 * Base class that all nodes inherit from.
 */
export abstract class Node<T> {
  public abstract tick(bb: T): NodeState;
}
