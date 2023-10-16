module.exports = {
    root: true,
    env: {
        node: true
    },
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        '@typescript-eslint/no-var-requires': 'off'
    },
    globals: {
        RAMP: 'readonly'
    }
};
