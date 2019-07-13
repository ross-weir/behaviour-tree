import {NodeIterator} from "../src/node-iterator";

describe("NodeIterator", () => {
  it("should iterate the collection", () => {
    const iterator = new NodeIterator<number>([1, 2, 3]);

    expect(iterator.current).toBe(1);
    iterator.next();
    expect(iterator.current).toBe(2);
    iterator.next();
    expect(iterator.current).toBe(3);
  });

  it("should return null when out of bounds", () => {
    const iterator = new NodeIterator<number>([1]);

    expect(iterator.current).toBe(1);
    iterator.next();
    expect(iterator.current).toBeNull;
  });

  it("should reset iteration", () => {
    const iterator = new NodeIterator<number>([1, 2, 3]);

    iterator.next();
    expect(iterator.current).toBe(2);
    iterator.reset();
    expect(iterator.current).toBe(1);
  });
});
