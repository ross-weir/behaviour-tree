import {Blackboard} from "./blackboard";
import {NodeState} from "./node-state.enum";

export type LeafNodeCallback = (bb: Blackboard) => NodeState;
export type ConditionNodeCallback = (bb: Blackboard) => boolean;
