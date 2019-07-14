import {ConditionNode} from "../../src/leaf-nodes";
import {Blackboard} from "../../src/blackboard";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: Blackboard = new Blackboard();

describe("ConditionNode", () => {
  it("should return NodeState.Success if action returns true", () => {
    const conditionNode = new ConditionNode((bb: Blackboard) => true);
    expect(conditionNode.tick(blackBoard)).toBe(NodeState.Success);
  });

  it("should return NodeState.Failure if action returns false", () => {
    const conditionNode = new ConditionNode((bb: Blackboard) => false);
    expect(conditionNode.tick(blackBoard)).toBe(NodeState.Failure);
  });
});
