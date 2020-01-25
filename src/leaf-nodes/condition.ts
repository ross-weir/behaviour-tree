import {ConditionNodeCallback} from "../leaf-node-callback.type";
import {NodeState} from "../node-state.enum";
import {LeafNode} from "./leaf-node";

/**
 * ConditionNodes return [[NodeState.Success]] if their client defined
 * action returns `true`. If the client defined action returns `false`
 * then the node returns [[NodeState.Failure]].
 *
 * ```ts
 * const conditionCheck = new ConditionNode<Blackboard>((bb: Blackboard) => {
 *   return unit.inRange(bb.otherUnit.location);
 * })
 * ```
 */
export class ConditionNode<T> extends LeafNode<T, ConditionNodeCallback<T>> {
  public tick(bb: T) {
    return this.action(bb) ? NodeState.Success : NodeState.Failure;
  }
}
