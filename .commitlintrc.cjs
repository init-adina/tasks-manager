const blacklistPlugin = require("./config/commitlint-blacklist.cjs");

module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: [blacklistPlugin],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "ci",
        "chore",
        "docs",
        "ticket",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "remove",
      ],
    ],
    "header-max-length": [2, "always", 100],
    //"subject-case": [2, "never", ["pascal-case", "snake-case"]],
    blacklist: [2, "always"],
  },
};
