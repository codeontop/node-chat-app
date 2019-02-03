module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["react", "jsx-a11y", "import", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-var": "off",
    "no-console": "off",
    "func-names": 0
  }
};
