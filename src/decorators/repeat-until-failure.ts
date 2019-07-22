import {Blackboard} from "../blackboard";
import {NodeState} from "../node-state.enum";
import {DecoratorNode} from "./decorator";

export class RepeatUntilFailureNode extends DecoratorNode {
  public tick(bb: Blackboard) {
    const state = this.child.tick(bb);

    // I think this is broken. Some sources say it should return success: https://www.gamasutra.com/blogs/ChrisSimpson/20140717/221339/Behavior_trees_for_AI_How_they_work.php
    // Look into it at some point.
    return state === NodeState.Failure ? state : NodeState.Running;
  }
}
