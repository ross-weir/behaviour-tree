import {NodeState} from "./node-state.enum";

export type LeafNodeCallback<T> = (bb: T) => NodeState;
export type ConditionNodeCallback<T> = (bb: T) => boolean;
