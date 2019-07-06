import {SequenceNode} from "../../src/composites";
import {ActionNode, ConditionNode} from "../../src/leaf-nodes";
import {IBlackboard} from "../../src/blackboard";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: IBlackboard = {state: {}};

describe("SequenceNode", () => {
  it("should return NodeState.Success if all leaf nodes succeed", () => {
    const sequence = new SequenceNode([
      new ActionNode(() => NodeState.Success),
      new ConditionNode(() => true),
      new ActionNode(() => NodeState.Success),
    ]);

    expect(sequence.tick(blackBoard)).toBe(NodeState.Success);
  });

  it("should return NodeState.Failure if any leaf nodes fail", () => {
    const sequence = new SequenceNode([
      new ActionNode(() => NodeState.Success),
      new ActionNode(() => NodeState.Failure),
      new ActionNode(() => NodeState.Success),
    ]);

    expect(sequence.tick(blackBoard)).toBe(NodeState.Failure);
  });

  it("should return NodeState.Running if any leaf nodes are running", () => {
    const sequence = new SequenceNode([
      new ActionNode(() => NodeState.Success),
      new ActionNode(() => NodeState.Running),
      new ActionNode(() => NodeState.Success),
    ]);

    expect(sequence.tick(blackBoard)).toBe(NodeState.Running);
  });

  it("should return NodeState.Running and then Node.Success", () => {
    const mockAction = jest.fn();

    mockAction
      .mockReturnValueOnce(NodeState.Running)
      .mockReturnValueOnce(NodeState.Success);

    const sequence = new SequenceNode([
      new ActionNode(() => NodeState.Success),
      new ActionNode(mockAction),
      new ActionNode(() => NodeState.Success),
    ]);

    expect(sequence.tick(blackBoard)).toBe(NodeState.Running);
    expect(sequence.tick(blackBoard)).toBe(NodeState.Success);
  });

  it("should handle multiple NodeState.Running returned leaf nodes", () => {
    const fakeAction = jest.fn();

    fakeAction
      .mockReturnValueOnce(NodeState.Running)
      .mockReturnValueOnce(NodeState.Running)
      .mockReturnValueOnce(NodeState.Success);

    const sequence = new SequenceNode([
      new ActionNode(() => NodeState.Success),
      new ActionNode(fakeAction),
      new ActionNode(() => NodeState.Success),
    ]);

    expect(sequence.tick(blackBoard)).toBe(NodeState.Running);
    expect(sequence.tick(blackBoard)).toBe(NodeState.Running);
    expect(sequence.tick(blackBoard)).toBe(NodeState.Success);
  });
});
