// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: { "no-unused-vars": "off", "react/prop-types": "off", " react/no-deprecated": "off", "react/display-name": "off", "no-unescaped-entitie": "off", "no-deprecated": "off" },
  parser: "babel-eslint",
};
