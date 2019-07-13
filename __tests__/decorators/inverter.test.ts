import {IBlackboard} from "../../src/blackboard";
import {InverterNode} from "../../src/decorators";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: IBlackboard = {state: {}};

describe("InverterNode", () => {
  describe("Simple inverters", () => {
    it("should return NodeState.Success if child returns NodeState.Failure", () => {
      const action = new InverterNode(new ActionNode(() => NodeState.Failure));

      expect(action.tick(blackBoard)).toBe(NodeState.Success);
    });

    it("should return NodeState.Failure if child returns NodeState.Success", () => {
      const action = new InverterNode(new ActionNode(() => NodeState.Success));

      expect(action.tick(blackBoard)).toBe(NodeState.Failure);
    });

    it("should return NodeState.Running if child returns NodeState.Running", () => {
      const action = new InverterNode(new ActionNode(() => NodeState.Running));

      expect(action.tick(blackBoard)).toBe(NodeState.Running);
    });
  });
});
