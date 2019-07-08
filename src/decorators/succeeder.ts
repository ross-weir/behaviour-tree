import {IBlackboard} from "../blackboard";
import {NodeState} from "../node-state.enum";
import {DecoratorNode} from "./decorator";

export class SucceederNode extends DecoratorNode {
  public tick(bb: IBlackboard) {
    this.child.tick(bb);

    return NodeState.Success;
  }
}
