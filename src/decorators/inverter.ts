import {Blackboard} from "../blackboard";
import {NodeState} from "../node-state.enum";
import {DecoratorNode} from "./decorator";

export class InverterNode extends DecoratorNode {
  public tick(bb: Blackboard) {
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
