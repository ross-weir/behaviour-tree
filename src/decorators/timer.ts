import {IBlackboard} from "../blackboard";
import {Node} from "../node";
import {NodeState} from "../node-state.enum";

export class TimerNode extends Node {
  constructor(
    private readonly delay: number,
    protected readonly child: Node[]
  ) {
    super();
  }

  public tick(bb: IBlackboard) {
    return NodeState.Success;
  }
}
