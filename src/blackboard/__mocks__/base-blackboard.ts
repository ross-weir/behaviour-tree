export const mockGet = jest.fn();
export const mockSet = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return {get: mockGet, set: mockSet};
});

export default mock;
