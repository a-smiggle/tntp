module.exports = {
  root: true,
  extends: ["custom"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
  ],
  parserOptions: { sourceType: "module", ecmaVersion: "latest" },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]
};
