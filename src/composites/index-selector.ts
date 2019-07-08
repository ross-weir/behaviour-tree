import {IBlackboard} from "../blackboard";
import {Node} from "../node";

type ChildenIndex = () => number | number;

export class IndexSelectorNode extends Node {
  constructor(
    protected readonly children: Node[],
    private readonly childIndex: ChildenIndex
  ) {
    super();
  }

  public tick(bb: IBlackboard) {
    return this.children[this.index].tick(bb);
  }

  private get index() {
    return typeof this.childIndex === "function"
      ? this.childIndex()
      : this.childIndex;
  }
}
