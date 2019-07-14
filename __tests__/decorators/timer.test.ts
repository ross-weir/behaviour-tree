import {IBlackboard} from "../../src/blackboard";
import {TimerNode} from "../../src/decorators";
import {ActionNode} from "../../src/leaf-nodes";
import {NodeState} from "../../src/node-state.enum";

const blackBoard: IBlackboard = {};

jest.useFakeTimers();

describe("TimerNode", () => {
  describe("Simple timers", () => {
    it("should return NodeState.Running until delay has elapsed", () => {
      const mockAction = jest.fn();
      const action = new TimerNode(1000, new ActionNode(mockAction));

      mockAction.mockReturnValue(NodeState.Success);

      expect(action.tick(blackBoard)).toBe(NodeState.Running);
      expect(mockAction).not.toBeCalled();

      jest.runAllTimers();

      expect(action.tick(blackBoard)).toBe(NodeState.Success);
      expect(mockAction).toHaveBeenCalledTimes(1);
    });
  });
});
