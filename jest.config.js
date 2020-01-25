module.exports = {
  roots: ["<rootDir>/__tests__"],
  testPathIgnorePatterns: ["<rootDir>/__tests__/test-blackboard.ts"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};
