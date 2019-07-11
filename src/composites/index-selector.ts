import {BaseBlackboard} from "../blackboard";
import {Node} from "../node";

export class IndexSelectorNode extends Node {
  constructor(
    private readonly childIndex: () => number,
    protected readonly children: Node[]
  ) {
    super();
  }

  public tick(bb: BaseBlackboard) {
    return this.children[this.childIndex()].tick(bb);
  }
}
