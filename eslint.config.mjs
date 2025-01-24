import { FlatCompat } from "@eslint/eslintrc";

import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from '@stylistic/eslint-plugin'

// used only for compat with eslint-config-next
// (see https://github.com/vercel/next.js/pull/71218#issuecomment-2441240316).
const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['.next', '.yarn', '**/*.d.ts', 'node_modules'], },
  pluginJs.configs.recommended,
  stylistic.configs["recommended-flat"],
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...compat.extends("next", "next/core-web-vitals", "next/typescript"),
  { files: ["**/*.{js,mjs,cjs}"], ...tseslint.configs.disableTypeChecked },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  { rules: { "@stylistic/jsx-one-expression-per-line": "off" } }
];
