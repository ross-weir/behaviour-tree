import {SelectorNode} from "../../src/composites";
import {ActionNode} from "../../src/leaf-nodes";
import {IBlackboard} from "../../src/blackboard";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: IBlackboard = {state: {}};

describe("SelectorNode", () => {
  describe("Simple selectors", () => {
    it("should return NodeState.Failure if all leaf nodes fail", () => {
      const sequence = new SelectorNode([
        new ActionNode(() => NodeState.Failure),
        new ActionNode(() => NodeState.Failure),
        new ActionNode(() => NodeState.Failure),
      ]);

      expect(sequence.tick(blackBoard)).toBe(NodeState.Failure);
    });

    it("should return NodeState.Success for first success node", () => {
      const mockAction = jest.fn();

      mockAction.mockReturnValue(NodeState.Success);

      const selector = new SelectorNode([
        new ActionNode(() => NodeState.Failure),
        new ActionNode(() => NodeState.Success),
        new ActionNode(mockAction),
      ]);

      expect(selector.tick(blackBoard)).toBe(NodeState.Success);
      expect(mockAction.mock.calls.length).toBe(0);
    });
  });
});
