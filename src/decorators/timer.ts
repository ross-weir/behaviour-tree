import {Blackboard} from "../blackboard";
import {Node} from "../node";
import {NodeState} from "../node-state.enum";

export class TimerNode extends Node {
  private timerHandle: number = 0;
  private shouldExecute: boolean = false;

  constructor(
    private readonly msDelay: number,
    protected readonly child: Node
  ) {
    super();
  }

  public tick(bb: Blackboard) {
    if (!this.timerHandle) {
      this.setTimer();
    }

    if (this.shouldExecute) {
      this.shouldExecute = false;
      this.disposeTimer();

      return this.child.tick(bb);
    }

    return NodeState.Running;
  }

  private setTimer() {
    this.timerHandle = setTimeout(() => {
      this.shouldExecute = true;
    }, this.msDelay) as any;
  }

  private disposeTimer() {
    clearTimeout(this.timerHandle);
    this.timerHandle = 0;
  }
}
