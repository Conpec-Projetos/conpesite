import { FlatCompat } from "@eslint/eslintrc";

import pluginJs from "@eslint/js";
import stylistic from '@stylistic/eslint-plugin'

// used only for compat with eslint-config-next
// (see https://github.com/vercel/next.js/pull/71218#issuecomment-2441240316).
const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['.next', '.yarn', '**/*.d.ts', 'node_modules'], },
  pluginJs.configs.recommended,
  stylistic.configs["recommended-flat"],
  ...compat.extends("next", "next/core-web-vitals", "next/typescript"),
  { rules: { "@stylistic/jsx-one-expression-per-line": "off" } }
];
