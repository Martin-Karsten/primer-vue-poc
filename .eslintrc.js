module.exports = {
  parser: `vue-eslint-parser`,
  parserOptions: {
    parser: `@typescript-eslint/parser`,
    sourceType: `module`
  },
  env: {
    node: true,
  },
  extends: [
    `eslint:recommended`,
    `plugin:vue/vue3-recommended`,
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': `error`,
    'quotes': [2, `backtick`, { "avoidEscape": true }]
  },
  globals: {
    defineProps: `readonly`,
    defineEmits: `readonly`,
    defineExpose: `readonly`,
    withDefaults: `readonly`
  }
}
