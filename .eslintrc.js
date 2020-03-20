module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "wdio"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:wdio/recommended",
    "prettier/@typescript-eslint",
  ],
  rules: {
    // this makes test files unnecessarily verbose
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { args: "none" }],
  },
  env: {
    node: true,
  },
};
