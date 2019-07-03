import {
  ConditionNodeCallback,
  LeafNodeCallback,
} from "./leaf-node-callback.type";
import {Node} from "./node";
import {NodeState} from "./node-state.enum";
import {IBlackboard} from "./blackboard";

/**
 * Base LeafNode class.
 * LeafNodes are nodes that have no children and
 * perform an action or a conditional check.
 */
abstract class LeafNode<T = LeafNodeCallback> extends Node {
  constructor(public readonly action: T) {
    super();
  }

  abstract tick(bb: IBlackboard): NodeState;
}

/**
 * ActionNodes are used to implement a client defined action.
 * These client defined actions could include moving an entity to a location.
 */
export class ActionNode extends LeafNode {
  tick(bb: IBlackboard) {
    return this.action(bb);
  }
}

/**
 * ConditionNodes return `NodeState.Success` if their client defined
 * action returns `true`. If the client defined action returns `false`
 * then the node returns `NodeState.Failure`.
 */
export class ConditionNode extends LeafNode<ConditionNodeCallback> {
  tick(bb: IBlackboard) {
    return this.action(bb) ? NodeState.Success : NodeState.Failure;
  }
}
