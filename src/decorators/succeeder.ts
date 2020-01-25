import {NodeState} from "../node-state.enum";
import {DecoratorNode} from "./decorator";

export class SucceederNode<T> extends DecoratorNode<T> {
  public tick(bb: T) {
    this.child.tick(bb);

    return NodeState.Success;
  }
}
