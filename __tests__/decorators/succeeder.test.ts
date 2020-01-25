import {SucceederNode} from "../../src/decorators";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";
import {testBlackboard, TestBlackboard} from "../test-blackboard";

describe("SucceederNode", () => {
  describe("Simple succeeders", () => {
    it("should return NodeState.Success if child returns NodeState.Failure", () => {
      const action = new SucceederNode<TestBlackboard>(
        new ActionNode<TestBlackboard>(() => NodeState.Failure)
      );

      expect(action.tick(testBlackboard)).toBe(NodeState.Success);
    });

    it("should return NodeState.Success if child returns NodeState.Success", () => {
      const action = new SucceederNode<TestBlackboard>(
        new ActionNode<TestBlackboard>(() => NodeState.Success)
      );

      expect(action.tick(testBlackboard)).toBe(NodeState.Success);
    });

    it("should return NodeState.Success if child returns NodeState.Running", () => {
      const action = new SucceederNode<TestBlackboard>(
        new ActionNode<TestBlackboard>(() => NodeState.Running)
      );

      expect(action.tick(testBlackboard)).toBe(NodeState.Success);
    });
  });
});
