import {Blackboard} from "../../src/blackboard";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: Blackboard = new Blackboard();

describe("ActionNode", () => {
  it("should return the result of the callback", () => {
    let actionNode = new ActionNode((bb: Blackboard) => NodeState.Success);
    expect(actionNode.tick(blackBoard)).toBe(NodeState.Success);

    actionNode = new ActionNode((bb: Blackboard) => NodeState.Failure);
    expect(actionNode.tick(blackBoard)).toBe(NodeState.Failure);

    actionNode = new ActionNode((bb: Blackboard) => NodeState.Running);
    expect(actionNode.tick(blackBoard)).toBe(NodeState.Running);
  });
});
