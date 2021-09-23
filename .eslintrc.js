module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
  ],
  root: true,
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_", ignoreRestSiblings: true }],
    "react/react-in-jsx-scope": "off",
  },
}
