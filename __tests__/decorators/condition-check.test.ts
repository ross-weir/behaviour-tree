import {SequenceNode} from "../../src/composites";
import {ConditionCheckNode} from "../../src/decorators";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";
import {testBlackboard, TestBlackboard} from "../test-blackboard";

describe("ConditionCheckNode", () => {
  describe("Simple condition check", () => {
    it("should return NodeState.Failure if ConditionCheckNode.conditionCheck() returns false", () => {
      const child = new SequenceNode<TestBlackboard>([]);
      const decorator = new ConditionCheckNode<TestBlackboard>(
        bb => false,
        child
      );

      expect(decorator.tick(testBlackboard)).toBe(NodeState.Failure);
    });
    it("should not tick child if ConditionCheckNode.conditionCheck() returns false", () => {
      const fakeAction = jest.fn();
      const child = new SequenceNode<TestBlackboard>([
        new ActionNode(fakeAction),
      ]);
      const decorator = new ConditionCheckNode<TestBlackboard>(
        bb => false,
        child
      );

      decorator.tick(testBlackboard);
      expect(fakeAction).not.toBeCalled();
    });
  });
});
