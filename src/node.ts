import {NodeState} from "./node-state.enum";
import {IBlackboard} from "./blackboard";

export abstract class Node {
  abstract tick(bb: IBlackboard): NodeState;
}
