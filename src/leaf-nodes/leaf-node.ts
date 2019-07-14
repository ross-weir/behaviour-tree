import {Blackboard} from "../blackboard";
import {LeafNodeCallback} from "../leaf-node-callback.type";
import {Node} from "../node";
import {NodeState} from "../node-state.enum";

/**
 * Base LeafNode class.
 * LeafNodes are nodes that have no children and
 * perform an action or a conditional check.
 */
export abstract class LeafNode<T = LeafNodeCallback> extends Node {
  constructor(public readonly action: T) {
    super();
  }

  public abstract tick(bb: Blackboard): NodeState;
}
