module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: { sourceType: "module", ecmaVersion: "latest" },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]
};