import {Blackboard} from "../blackboard";
import {NodeState} from "../node-state.enum";
import {DecoratorNode} from "./decorator";

export class SucceederNode extends DecoratorNode {
  public tick(bb: Blackboard) {
    this.child.tick(bb);

    return NodeState.Success;
  }
}
