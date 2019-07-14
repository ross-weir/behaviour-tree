import {ConditionNode} from "../../src/leaf-nodes";
import {IBlackboard} from "../../src/blackboard";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: IBlackboard = {};

describe("ConditionNode", () => {
  it("should return NodeState.Success if action returns true", () => {
    const conditionNode = new ConditionNode((bb: IBlackboard) => true);
    expect(conditionNode.tick(blackBoard)).toBe(NodeState.Success);
  });

  it("should return NodeState.Failure if action returns false", () => {
    const conditionNode = new ConditionNode((bb: IBlackboard) => false);
    expect(conditionNode.tick(blackBoard)).toBe(NodeState.Failure);
  });
});
