import {Blackboard} from "../../src/blackboard";
import {RepeatUntilFailureNode} from "../../src/decorators";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: Blackboard = new Blackboard();

describe("RepeatUntilFailureNode", () => {
  describe("Simple repeat until failure", () => {
    it("should return NodeState.Running if action returns NodeState.Success", () => {
      const action = new RepeatUntilFailureNode(
        new ActionNode(() => NodeState.Success)
      );

      expect(action.tick(blackBoard)).toBe(NodeState.Running);
    });
    it("should return NodeState.Running if action returns NodeState.Running", () => {
      const action = new RepeatUntilFailureNode(
        new ActionNode(() => NodeState.Running)
      );

      expect(action.tick(blackBoard)).toBe(NodeState.Running);
    });
    it("should return NodeState.Failure if action returns NodeState.Failure", () => {
      const action = new RepeatUntilFailureNode(
        new ActionNode(() => NodeState.Failure)
      );

      expect(action.tick(blackBoard)).toBe(NodeState.Failure);
    });
  });
});
