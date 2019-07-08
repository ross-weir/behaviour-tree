import {NodeState} from "../node-state.enum";
import {CompositeNode} from "./composite";

export class SequenceNode extends CompositeNode {
  protected shouldReturnState(state: NodeState): boolean {
    return state === NodeState.Failure || state === NodeState.Running;
  }

  protected get defaultResult() {
    return NodeState.Success;
  }
}
