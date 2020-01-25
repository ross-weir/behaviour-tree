import {LeafNode} from "./leaf-node";

/**
 * ActionNodes are used to implement a client defined action.
 * These client defined actions could include moving an entity to a location:
 *
 * ```ts
 * const moveAction = new ActionNode<Blackboard>((bb: Blackboard) => {
 *   unit.moveTo(bb.destination);
 *   return NodeState.Success;
 * })
 * ```
 */
export class ActionNode<T> extends LeafNode<T> {
  public tick(bb: T) {
    return this.action(bb);
  }
}
