import {RepeatUntilFailureNode} from "../../src/decorators";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";
import {testBlackboard, TestBlackboard} from "../test-blackboard";

describe("RepeatUntilFailureNode", () => {
  describe("Simple repeat until failure", () => {
    it("should return NodeState.Running if action returns NodeState.Success", () => {
      const action = new RepeatUntilFailureNode<TestBlackboard>(
        new ActionNode<TestBlackboard>(() => NodeState.Success)
      );

      expect(action.tick(testBlackboard)).toBe(NodeState.Running);
    });
    it("should return NodeState.Running if action returns NodeState.Running", () => {
      const action = new RepeatUntilFailureNode<TestBlackboard>(
        new ActionNode<TestBlackboard>(() => NodeState.Running)
      );

      expect(action.tick(testBlackboard)).toBe(NodeState.Running);
    });
    it("should return NodeState.Failure if action returns NodeState.Failure", () => {
      const action = new RepeatUntilFailureNode<TestBlackboard>(
        new ActionNode<TestBlackboard>(() => NodeState.Failure)
      );

      expect(action.tick(testBlackboard)).toBe(NodeState.Failure);
    });
  });
});
