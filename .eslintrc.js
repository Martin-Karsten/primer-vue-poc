module.exports = {
  parser: `vue-eslint-parser`,
  parserOptions: {
    parser: `@typescript-eslint/parser`,
    sourceType: `module`,
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    `plugin:vue/vue3-recommended`,
    `eslint:recommended`,
    `@vue/typescript/recommended`,
    `@vue/prettier`,
    `@vue/prettier/@typescript-eslint`,
  ],
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars": `error`,
    "vue/require-default-prop": `off`,
    "@typescript-eslint/no-var-requires": `off`,
    quotes: [2, `backtick`, { avoidEscape: true }],
  },
  globals: {
    defineProps: `readonly`,
    defineEmits: `readonly`,
    defineExpose: `readonly`,
    withDefaults: `readonly`,
  },
};
