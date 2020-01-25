import {IndexSelectorNode} from "../../src/composites";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";

import {testBlackboard, TestBlackboard} from "../test-blackboard";

describe("IndexSelectorNode", () => {
  describe("Simple index selectors", () => {
    it("should return NodeState of the node index", () => {
      const sequence = new IndexSelectorNode<TestBlackboard>(() => 1, [
        new ActionNode<TestBlackboard>(() => NodeState.Failure),
        new ActionNode<TestBlackboard>(() => NodeState.Success),
        new ActionNode<TestBlackboard>(() => NodeState.Running),
      ]);

      expect(sequence.tick(testBlackboard)).toBe(NodeState.Success);
    });
  });
});
