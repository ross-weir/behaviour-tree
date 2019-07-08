import {IBlackboard} from "../blackboard";
import {Node} from "../node";
import {NodeIterator} from "../node-iterator";
import {NodeState} from "../node-state.enum";

export abstract class CompositeNode extends Node {
  protected nodeIterator: NodeIterator;

  constructor(protected readonly children: Node[]) {
    super();
    this.nodeIterator = new NodeIterator(children);
  }

  public tick(bb: IBlackboard) {
    do {
      const node = this.nodeIterator.current;
      const state = node.tick(bb);

      if (this.shouldReturnState(state)) {
        return state;
      }
    } while (this.nodeIterator.next());

    this.nodeIterator.reset();

    return this.defaultResult;
  }

  protected abstract shouldReturnState(state: NodeState): boolean;
  protected abstract get defaultResult(): NodeState;
}
