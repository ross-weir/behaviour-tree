import {ActionNode, ConditionNode} from "../src/leaf-node";
import {IBlackboard} from "../src/blackboard";
import {NodeState} from "../src/node-state.enum";

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

describe("ConditionNode", () => {
  it("should return true if action returns NodeState.Success", () => {
    const conditionNode = new ConditionNode((bb: IBlackboard) => true);
    expect(conditionNode.tick(blackBoard)).toBe(NodeState.Success);
  });

  it("should return false if action returns NodeState.Failure", () => {
    const conditionNode = new ConditionNode((bb: IBlackboard) => false);
    expect(conditionNode.tick(blackBoard)).toBe(NodeState.Failure);
  });
});
