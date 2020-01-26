import {ICompositeService} from "../composite-service";
import {Node} from "../node";
import {NodeIterator} from "../node-iterator";
import {NodeState} from "../node-state.enum";

export abstract class CompositeNode<T> extends Node<T> {
  public saveIteration: boolean = false;
  private nodeIterator: NodeIterator<T>;

  constructor(
    protected readonly children: Array<Node<T>>,
    private readonly services: Array<ICompositeService<T>> = []
  ) {
    super();
    this.nodeIterator = new NodeIterator<T>(children);
  }

  public tick(bb: T) {
    this.services.forEach(service => service.beforeTick(bb));

    do {
      const node = this.nodeIterator.current;
      const state = node.tick(bb);

      if (this.shouldReturnState(state)) {
        if (!this.saveIteration) {
          this.nodeIterator.reset();
        }

        return state;
      }
    } while (this.nodeIterator.next());

    this.services.forEach(service => service.afterTick(bb));
    this.nodeIterator.reset();

    return this.defaultResult;
  }

  protected abstract shouldReturnState(state: NodeState): boolean;
  protected abstract get defaultResult(): NodeState;
}
