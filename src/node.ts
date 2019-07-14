import {Blackboard} from "./blackboard";
import {NodeState} from "./node-state.enum";

/**
 * Base class that all nodes inherit from.
 */
export abstract class Node {
  public abstract tick(bb: Blackboard): NodeState;
}
