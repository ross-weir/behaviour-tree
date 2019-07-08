import {NodeState} from "../node-state.enum";
import {CompositeNode} from "./composite";

export class SelectorNode extends CompositeNode {
  protected shouldReturnState(state: NodeState): boolean {
    return state === NodeState.Success || state === NodeState.Running;
  }

  protected get defaultResult() {
    return NodeState.Failure;
  }
}
