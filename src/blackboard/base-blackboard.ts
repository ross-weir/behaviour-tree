import {ILooseStateObject} from "./loose-state-object.interface";

export abstract class BaseBlackboard {
  protected state: ILooseStateObject = {};

  public abstract get(key: string): any;
  public abstract set(key: string, value: any): boolean;
}
