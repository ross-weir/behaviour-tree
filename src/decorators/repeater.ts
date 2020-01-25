import {NodeState} from "../node-state.enum";
import {DecoratorNode} from "./decorator";

export class RepeaterNode<T> extends DecoratorNode<T> {
  public tick(bb: T) {
    this.child.tick(bb);

    return NodeState.Running;
  }
}
