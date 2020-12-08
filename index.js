module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': [
            'warn',
            {
                ignoreRestArgs: true,
            },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'max-len': [
            'error',
            120,
        ],
        'quotes': [
            'error',
            'single',
        ],
        'quote-props': [
            'error',
            'consistent-as-needed',
        ],
        'semi': [
            'error',
            'always',
        ],
    },
    overrides: [
        {
            files: [
                '.eslintrc.js',
                'jest.config.js',
            ],
            env: { node: true },
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
