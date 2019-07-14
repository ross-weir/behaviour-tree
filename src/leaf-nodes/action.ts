import {Blackboard} from "../blackboard";
import {LeafNode} from "./leaf-node";

/**
 * ActionNodes are used to implement a client defined action.
 * These client defined actions could include moving an entity to a location:
 *
 * ```ts
 * const moveAction = new ActionNode((bb: Blackboard) => {
 *   unit.moveTo(bb.destination);
 *   return NodeState.Success;
 * })
 * ```
 */
export class ActionNode extends LeafNode {
  public tick(bb: Blackboard) {
    return this.action(bb);
  }
}
