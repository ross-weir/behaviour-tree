const config = {
  "*.ts": ["tslint --config tslint.json --fix", "prettier --write", "git add"],
};

module.exports = config;
