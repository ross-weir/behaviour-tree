import {NodeState} from "../node-state.enum";
import {Composite} from "./composite";

export class Sequence extends Composite {
  tick() {
    for (const node of this.children_) {
      const state = node.tick();

      if (state === NodeState.Failed || state === NodeState.Running) {
        return state;
      }
    }

    return NodeState.Success;
  }
}
