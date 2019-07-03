import {LeafNode} from "./leaf-node";
import {IBlackboard} from "../blackboard";

/**
 * ActionNodes are used to implement a client defined action.
 * These client defined actions could include moving an entity to a location:
 *
 * ```ts
 * const moveAction = new ActionNode((bb: IBlackboard) => {
 *   unit.moveTo(bb.destination);
 *   return NodeState.Success;
 * })
 * ```
 */
export class ActionNode extends LeafNode {
  public tick(bb: IBlackboard) {
    return this.action(bb);
  }
}
