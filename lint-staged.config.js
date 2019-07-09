const config = {
  "*.ts": ["prettier --write", "tslint --config tslint.json --fix", "git add"],
};

module.exports = config;
