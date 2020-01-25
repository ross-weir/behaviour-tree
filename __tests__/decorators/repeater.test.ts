import {RepeaterNode} from "../../src/decorators";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";
import {testBlackboard, TestBlackboard} from "../test-blackboard";

describe("RepeaterNode", () => {
  describe("Simple repeaters", () => {
    it("should always return NodeState.Running", () => {
      const action = new RepeaterNode<TestBlackboard>(
        new ActionNode<TestBlackboard>(() => NodeState.Failure)
      );

      expect(action.tick(testBlackboard)).toBe(NodeState.Running);
    });
  });
});
