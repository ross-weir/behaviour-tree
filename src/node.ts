import {NodeState} from "./node-state.enum";

export abstract class Node {
  abstract tick(): NodeState;
}
