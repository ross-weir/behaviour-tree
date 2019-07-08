import {IBlackboard} from "../blackboard";
import {Node} from "../node";

export class IndexSelectorNode extends Node {
  constructor(
    private readonly childIndex: () => number,
    protected readonly children: Node[]
  ) {
    super();
  }

  public tick(bb: IBlackboard) {
    return this.children[this.childIndex()].tick(bb);
  }
}
