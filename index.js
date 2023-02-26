module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "no-explicit-any": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": ["error"],
    "@typescript-eslint/sort-type-union-intersection-members": "error",
    "@typescript-eslint/type-annotation-spacing": ["error", { "after": true }],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-console": "warn",
    "require-await": "error",
    "no-trailing-spaces": "error",
    "max-len": ["error", 125],
    "arrow-spacing": "error"
  }
};