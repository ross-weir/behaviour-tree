import {NodeState} from "../node-state.enum";
import {DecoratorNode} from "./decorator";

export class InverterNode<T> extends DecoratorNode<T> {
  public tick(bb: T) {
    const state = this.child.tick(bb);

    if (state === NodeState.Success) {
      return NodeState.Failure;
    }

    if (state === NodeState.Failure) {
      return NodeState.Success;
    }

    return NodeState.Running;
  }
}
