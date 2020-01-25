import {TimerNode} from "../../src/decorators";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";
import {testBlackboard, TestBlackboard} from "../test-blackboard";

jest.useFakeTimers();

describe("TimerNode", () => {
  describe("Simple timers", () => {
    it("should return NodeState.Running until delay has elapsed", () => {
      const mockAction = jest.fn();
      const action = new TimerNode<TestBlackboard>(
        1000,
        new ActionNode<TestBlackboard>(mockAction)
      );

      mockAction.mockReturnValue(NodeState.Success);

      expect(action.tick(testBlackboard)).toBe(NodeState.Running);
      expect(mockAction).not.toBeCalled();

      jest.runAllTimers();

      expect(action.tick(testBlackboard)).toBe(NodeState.Success);
      expect(mockAction).toHaveBeenCalledTimes(1);
    });
  });
});
