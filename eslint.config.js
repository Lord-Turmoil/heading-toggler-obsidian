import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

const tsFiles = ["**/*.{ts,js}"];
const tsRecommended = tseslint.configs["flat/recommended"].map((config) => ({
	...config,
	files: tsFiles,
}));

export default defineConfig([
	globalIgnores(["main.js"]),
	js.configs.recommended,
	{
		languageOptions: {
			globals: globals.node,
			sourceType: "module",
		},
	},
	...tsRecommended,
	{
		files: tsFiles,
		rules: {
			"no-unused-vars": "error",
			"@typescript-eslint/no-unused-vars": ["error", { args: "none" }],
			"@typescript-eslint/ban-ts-comment": "off",
			"no-prototype-builtins": "off",
			"@typescript-eslint/no-empty-function": "off",
		},
	},
]);
