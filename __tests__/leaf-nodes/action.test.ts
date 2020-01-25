import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";
import {testBlackboard, TestBlackboard} from "../test-blackboard";

describe("ActionNode", () => {
  it("should return the result of the callback", () => {
    let actionNode = new ActionNode<TestBlackboard>(
      (bb: TestBlackboard) => NodeState.Success
    );
    expect(actionNode.tick(testBlackboard)).toBe(NodeState.Success);

    actionNode = new ActionNode<TestBlackboard>(
      (bb: TestBlackboard) => NodeState.Failure
    );
    expect(actionNode.tick(testBlackboard)).toBe(NodeState.Failure);

    actionNode = new ActionNode<TestBlackboard>(
      (bb: TestBlackboard) => NodeState.Running
    );
    expect(actionNode.tick(testBlackboard)).toBe(NodeState.Running);
  });
});
