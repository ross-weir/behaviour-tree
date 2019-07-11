import {BaseBlackboard} from "./base-blackboard";

export class BlackBoard extends BaseBlackboard {
  public get(key: string) {
    return this.state[key];
  }

  public set(key: string, value: any) {
    this.state[key] = value;

    return true;
  }
}
