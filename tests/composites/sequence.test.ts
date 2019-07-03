import {SequenceNode} from "../../src/composites";
import {ActionNode, ConditionNode} from "../../src/leaf-nodes";
import {IBlackboard} from "../../src/blackboard";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: IBlackboard = {state: {}};

describe("SequenceNode", () => {
  it("should return Node.Success if all leaf nodes succeed", () => {
    const sequence = new SequenceNode([
      new ActionNode(() => NodeState.Success),
      new ConditionNode(() => true),
      new ActionNode(() => NodeState.Success),
    ]);

    expect(sequence.tick(blackBoard)).toBe(NodeState.Success);
  });

  it("should return Node.Failure if any leaf nodes fail", () => {
    const sequence = new SequenceNode([
      new ActionNode(() => NodeState.Success),
      new ActionNode(() => NodeState.Failure),
      new ActionNode(() => NodeState.Success),
    ]);

    expect(sequence.tick(blackBoard)).toBe(NodeState.Failure);
  });
});
