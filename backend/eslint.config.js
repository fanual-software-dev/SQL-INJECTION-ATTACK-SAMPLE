// backend/eslint.config.js
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        console: "readonly",
        module: "readonly",
        require: "readonly",
        test: "readonly",
        expect: "readonly",
        __dirname: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn", // Change unused variables to warning
      "no-console": "off" // Allow console.log for debugging
    }
  }
];
