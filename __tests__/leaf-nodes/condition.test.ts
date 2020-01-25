import {ConditionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";
import {testBlackboard, TestBlackboard} from "../test-blackboard";

describe("ConditionNode", () => {
  it("should return NodeState.Success if action returns true", () => {
    const conditionNode = new ConditionNode<TestBlackboard>(
      (bb: TestBlackboard) => true
    );
    expect(conditionNode.tick(testBlackboard)).toBe(NodeState.Success);
  });

  it("should return NodeState.Failure if action returns false", () => {
    const conditionNode = new ConditionNode<TestBlackboard>(
      (bb: TestBlackboard) => false
    );
    expect(conditionNode.tick(testBlackboard)).toBe(NodeState.Failure);
  });
});
