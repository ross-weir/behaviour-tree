import {SelectorNode} from "../../src/composites";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";

import {testBlackboard, TestBlackboard} from "../test-blackboard";

describe("SelectorNode", () => {
  describe("Simple selectors", () => {
    it("should return NodeState.Failure if all leaf nodes fail", () => {
      const sequence = new SelectorNode<TestBlackboard>([
        new ActionNode<TestBlackboard>(() => NodeState.Failure),
        new ActionNode<TestBlackboard>(() => NodeState.Failure),
        new ActionNode<TestBlackboard>(() => NodeState.Failure),
      ]);

      expect(sequence.tick(testBlackboard)).toBe(NodeState.Failure);
    });

    it("should return NodeState.Success for first success node", () => {
      const mockAction = jest.fn();

      mockAction.mockReturnValue(NodeState.Success);

      const selector = new SelectorNode<TestBlackboard>([
        new ActionNode<TestBlackboard>(() => NodeState.Failure),
        new ActionNode<TestBlackboard>(() => NodeState.Success),
        new ActionNode<TestBlackboard>(mockAction),
      ]);

      expect(selector.tick(testBlackboard)).toBe(NodeState.Success);
      expect(mockAction).not.toBeCalled();
    });
  });
});
