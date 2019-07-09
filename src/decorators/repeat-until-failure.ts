import {IBlackboard} from "../blackboard";
import {NodeState} from "../node-state.enum";
import {DecoratorNode} from "./decorator";

export class RepeatUntilFailureNode extends DecoratorNode {
  public tick(bb: IBlackboard) {
    const state = this.child.tick(bb);

    return state === NodeState.Failure ? state : NodeState.Running;
  }
}
