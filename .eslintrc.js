module.exports = {
  root: true,
  env: {
    node: true,
    // Add 'vue/setup-compiler-macros' to recognize defineProps and defineEmits
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // Disable the multi-word component name rule if you prefer
    'vue/multi-word-component-names': 'off'
  }
};
