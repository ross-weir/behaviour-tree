import {BaseBlackboard} from "../../src/blackboard";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: BaseBlackboard = {state: {}};

describe("ActionNode", () => {
  it("should return the result of the callback", () => {
    let actionNode = new ActionNode((bb: BaseBlackboard) => NodeState.Success);
    expect(actionNode.tick(blackBoard)).toBe(NodeState.Success);

    actionNode = new ActionNode((bb: BaseBlackboard) => NodeState.Failure);
    expect(actionNode.tick(blackBoard)).toBe(NodeState.Failure);

    actionNode = new ActionNode((bb: BaseBlackboard) => NodeState.Running);
    expect(actionNode.tick(blackBoard)).toBe(NodeState.Running);
  });
});
