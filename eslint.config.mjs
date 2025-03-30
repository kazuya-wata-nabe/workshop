import { defineConfig } from "eslint/config"
import globals from "globals"
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import eslintUnicorn from "eslint-plugin-unicorn"
import eslintConfigPrettier from "eslint-plugin-prettier/recommended"

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  tseslint.configs.recommended,
  eslintUnicorn.configs.recommended,
  eslintConfigPrettier,
])
