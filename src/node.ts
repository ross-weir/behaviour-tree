import {NodeState} from "./node-state.enum";
import {IBlackboard} from "./blackboard";

/**
 * Base class that all nodes inherit from.
 */
export abstract class Node {
  abstract tick(bb: IBlackboard): NodeState;
}
