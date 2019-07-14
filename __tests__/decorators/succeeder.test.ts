import {IBlackboard} from "../../src/blackboard";
import {SucceederNode} from "../../src/decorators";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: IBlackboard = {};

describe("SucceederNode", () => {
  describe("Simple succeeders", () => {
    it("should return NodeState.Success if child returns NodeState.Failure", () => {
      const action = new SucceederNode(new ActionNode(() => NodeState.Failure));

      expect(action.tick(blackBoard)).toBe(NodeState.Success);
    });

    it("should return NodeState.Success if child returns NodeState.Success", () => {
      const action = new SucceederNode(new ActionNode(() => NodeState.Success));

      expect(action.tick(blackBoard)).toBe(NodeState.Success);
    });

    it("should return NodeState.Success if child returns NodeState.Running", () => {
      const action = new SucceederNode(new ActionNode(() => NodeState.Running));

      expect(action.tick(blackBoard)).toBe(NodeState.Success);
    });
  });
});
