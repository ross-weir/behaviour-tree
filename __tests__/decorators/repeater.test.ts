import {IBlackboard} from "../../src/blackboard";
import {RepeaterNode} from "../../src/decorators";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: IBlackboard = {};

describe("RepeaterNode", () => {
  describe("Simple repeaters", () => {
    it("should always return NodeState.Running", () => {
      const action = new RepeaterNode(new ActionNode(() => NodeState.Failure));

      expect(action.tick(blackBoard)).toBe(NodeState.Running);
    });
  });
});
