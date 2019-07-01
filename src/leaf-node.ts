import {Node} from "./node";
import {NodeState} from "./node-state.enum";

export class LeafNode extends Node {
  action_: () => NodeState;

  constructor(action: () => NodeState) {
    super();
    this.action_ = action;
  }

  tick() {
    return this.action_();
  }
}
