import {ActionNode} from "../../src/leaf-nodes";
import {IBlackboard} from "../../src/blackboard";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: IBlackboard = {state: {}};

describe("ActionNode", () => {
  it("should return the result of the callback", () => {
    let actionNode = new ActionNode((bb: IBlackboard) => NodeState.Success);
    expect(actionNode.tick(blackBoard)).toBe(NodeState.Success);

    actionNode = new ActionNode((bb: IBlackboard) => NodeState.Failure);
    expect(actionNode.tick(blackBoard)).toBe(NodeState.Failure);

    actionNode = new ActionNode((bb: IBlackboard) => NodeState.Running);
    expect(actionNode.tick(blackBoard)).toBe(NodeState.Running);
  });
});
