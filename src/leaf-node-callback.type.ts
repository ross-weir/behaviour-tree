import {IBlackboard} from "./blackboard";
import {NodeState} from "./node-state.enum";

export type LeafNodeCallback = (bb: IBlackboard) => NodeState;
export type ConditionNodeCallback = (bb: IBlackboard) => boolean;
