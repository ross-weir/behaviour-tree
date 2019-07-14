import {IBlackboard} from "../../src/blackboard";
import {IndexSelectorNode} from "../../src/composites";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: IBlackboard = {};

describe("IndexSelectorNode", () => {
  describe("Simple index selectors", () => {
    it("should return NodeState of the node index", () => {
      const sequence = new IndexSelectorNode(() => 1, [
        new ActionNode(() => NodeState.Failure),
        new ActionNode(() => NodeState.Success),
        new ActionNode(() => NodeState.Running),
      ]);

      expect(sequence.tick(blackBoard)).toBe(NodeState.Success);
    });
  });
});
