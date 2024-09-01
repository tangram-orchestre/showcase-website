import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tailwind from "eslint-plugin-tailwindcss";
// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    files: ["**/*.ts", "**/*.vue", "**/*.mjs"],
    rules: {
      "vue/no-multiple-template-root": "off",
    },
  },
  eslintPluginPrettierRecommended,
  ...tailwind.configs["flat/recommended"],
);
