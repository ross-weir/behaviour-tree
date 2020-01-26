// Why these are useful: https://www.youtube.com/watch?v=49Xub-taTig
export interface ICompositeService<T> {
  beforeTick(bb: T): void;
  afterTick(bb: T): void;
}
