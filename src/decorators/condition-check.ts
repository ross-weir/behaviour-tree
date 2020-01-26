import {Node} from "../node";
import {NodeState} from "../node-state.enum";
import {DecoratorNode} from "./decorator";

export class ConditionCheckNode<T> extends DecoratorNode<T> {
  constructor(
    private readonly conditionCheck: (bb: T) => boolean,
    protected readonly child: Node<T>
  ) {
    super(child);
  }

  public tick(bb: T) {
    if (!this.conditionCheck(bb)) {
      return NodeState.Failure;
    }

    return this.child.tick(bb);
  }
}
