import {LeafNodeCallback} from "./leaf-node-callback.type";
import {Node} from "./node";
import {NodeState} from "./node-state.enum";
import {IBlackboard} from "./blackboard";

abstract class LeafNode extends Node {
  constructor(public readonly action: LeafNodeCallback) {
    super();
  }

  abstract tick(bb: IBlackboard): NodeState;
}

export class ActionNode extends LeafNode {
  tick(bb: IBlackboard) {
    return this.action(bb);
  }
}

export class ConditionNode extends LeafNode {
  tick(bb: IBlackboard) {
    return this.action(bb) ? NodeState.Success : NodeState.Failure;
  }
}
