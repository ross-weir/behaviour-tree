import {LeafNodeCallback} from "../leaf-node-callback.type";
import {Node} from "../node";
import {NodeState} from "../node-state.enum";

/**
 * Base LeafNode class.
 * LeafNodes are nodes that have no children and
 * perform an action or a conditional check.
 */
export abstract class LeafNode<
  BlackboardType,
  T = LeafNodeCallback<BlackboardType>
> extends Node<BlackboardType> {
  constructor(public readonly action: T) {
    super();
  }

  public abstract tick(bb: BlackboardType): NodeState;
}
