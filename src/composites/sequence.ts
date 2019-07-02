import {NodeState} from "../node-state.enum";
import {CompositeNode} from "./composite";
import {IBlackboard} from "../blackboard";

export class SequenceNode extends CompositeNode {
  tick(bb: IBlackboard) {
    for (const node of this.children) {
      const state = node.tick(bb);

      if (state === NodeState.Failure || state === NodeState.Running) {
        return state;
      }
    }

    return NodeState.Success;
  }
}
