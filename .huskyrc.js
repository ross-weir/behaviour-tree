const config = {
  hooks: {
    "pre-commit": "lint-staged --config lint-staged.config.js",
  },
};

module.exports = config;
