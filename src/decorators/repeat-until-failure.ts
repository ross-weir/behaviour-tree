import {BaseBlackboard} from "../blackboard";
import {NodeState} from "../node-state.enum";
import {DecoratorNode} from "./decorator";

export class RepeatUntilFailureNode extends DecoratorNode {
  public tick(bb: BaseBlackboard) {
    const state = this.child.tick(bb);

    return state === NodeState.Failure ? state : NodeState.Running;
  }
}
