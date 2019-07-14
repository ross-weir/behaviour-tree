export interface ILooseObject {
  [key: string]: any;
}

export class Blackboard {
  protected data: ILooseObject;

  constructor(initialData: ILooseObject = {}) {
    this.data = initialData;
  }

  public setData(key: string, value: any) {
    this.data[key] = value;
  }

  public getData(key: string) {
    return this.data[key];
  }
}
