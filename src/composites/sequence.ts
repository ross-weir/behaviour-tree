import {IBlackboard} from "../blackboard";
import {NodeState} from "../node-state.enum";
import {CompositeNode} from "./composite";

export class SequenceNode extends CompositeNode {
  public tick(bb: IBlackboard) {
    for (const node of this.children) {
      const state = node.tick(bb);

      if (state === NodeState.Failure || state === NodeState.Running) {
        return state;
      }
    }

    return NodeState.Success;
  }
}
