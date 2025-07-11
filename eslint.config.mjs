import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "@eslint/js"; // ✅ Use this source instead

export default defineConfig([
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    plugins: {
      js
    },
    rules: {
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "single"]
    },
    // Optional style guide
    extends: ["eslint:recommended"]
  }
]);
