import {IBlackboard} from "../blackboard";
import {NodeState} from "../node-state.enum";
import {CompositeNode} from "./composite";

export class SequenceNode extends CompositeNode {
  public tick(bb: IBlackboard) {
    do {
      const node = this.nodeIterator.current;
      const state = node.tick(bb);

      if (state === NodeState.Failure || state === NodeState.Running) {
        return state;
      }
    } while (this.nodeIterator.next());

    this.nodeIterator.reset();

    return NodeState.Success;
  }
}
