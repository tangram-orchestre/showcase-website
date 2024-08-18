import tailwind from 'eslint-plugin-tailwindcss';
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['**/*.ts', '**/*.vue'],
  rules: {
    'vue/no-multiple-template-root': 'off',
  },
}, ...tailwind.configs['flat/recommended'],
);
