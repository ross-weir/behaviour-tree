import {BaseBlackboard} from "../../src/blackboard";
import {ConditionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";
jest.mock("../../src/blackboard");

const blackBoard: BaseBlackboard = {state: {}};

describe("ConditionNode", () => {
  it("should return NodeState.Success if action returns true", () => {
    const conditionNode = new ConditionNode((bb: BaseBlackboard) => true);
    expect(conditionNode.tick(blackBoard)).toBe(NodeState.Success);
  });

  it("should return NodeState.Failure if action returns false", () => {
    const conditionNode = new ConditionNode((bb: BaseBlackboard) => false);
    expect(conditionNode.tick(blackBoard)).toBe(NodeState.Failure);
  });
});
