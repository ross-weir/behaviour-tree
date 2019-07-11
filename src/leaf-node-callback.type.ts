import {BaseBlackboard} from "./blackboard";
import {NodeState} from "./node-state.enum";

export type LeafNodeCallback = (bb: BaseBlackboard) => NodeState;
export type ConditionNodeCallback = (bb: BaseBlackboard) => boolean;
