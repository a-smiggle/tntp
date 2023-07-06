module.exports = {
  extends: ["turbo", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ['dist/*']
};
