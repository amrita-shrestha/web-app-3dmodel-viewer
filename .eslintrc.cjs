module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier-vue/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      ts: '@typescript-eslint/parser'
    },
    requireConfigFile: false,
    sourceType: 'module'
  },
  rules: {
    'require-await': 'error',
    'no-new': 'off',
    'node/no-callback-literal': 'off',
    'unused-imports/no-unused-imports': 'error',
    'nonblock-statement-body-position': ['error', 'below'],
    curly: 'error',

    // Vue 3 rules: (need to be fixed, but can be done incrementally)
    'vue/no-deprecated-events-api': 'warn'
  },
  globals: {
    require: false,
    requirejs: false
  },
  plugins: ['unused-imports'],
  overrides: [
    {
      files: ['**/*.vue'],
      extends: ['plugin:vue/recommended', 'plugin:prettier-vue/recommended'],
      rules: {
        'vue/multi-word-component-names': 'warn',
        'vue/no-multiple-template-root': 'off',
        'vue/no-v-model-argument': 'off',
        'vue/no-v-text-v-html-on-component': 'warn'
      }
    },
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'prefer-const': 'error',
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'warn'
      }
    }
  ]
}
