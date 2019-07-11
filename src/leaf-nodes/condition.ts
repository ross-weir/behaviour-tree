import {BaseBlackboard} from "../blackboard";
import {ConditionNodeCallback} from "../leaf-node-callback.type";
import {NodeState} from "../node-state.enum";
import {LeafNode} from "./leaf-node";

/**
 * ConditionNodes return [[NodeState.Success]] if their client defined
 * action returns `true`. If the client defined action returns `false`
 * then the node returns [[NodeState.Failure]].
 *
 * ```ts
 * const conditionCheck = new ConditionNode((bb: BaseBlackboard) => {
 *   return unit.inRange(bb.otherUnit.location);
 * })
 * ```
 */
export class ConditionNode extends LeafNode<ConditionNodeCallback> {
  public tick(bb: BaseBlackboard) {
    return this.action(bb) ? NodeState.Success : NodeState.Failure;
  }
}
