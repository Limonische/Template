// Eslint configuration file

module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    env: {
        browser: true,
    },
    rules: {
        indent: ['error', 4],
        'arrow-parens': ['error', 'as-needed'],
        'no-param-reassign': 0,
        'no-restricted-syntax': 0,
        'no-plusplus': 0,
        'max-len': [
            'error',
            {
                code: 120,
                tabWidth: 4,
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'prettier/prettier': 'error',
    },
    overrides: [
        {
            files: ['webpack/*', '*.config.js', '*.*rc.js'],
            rules: {
                'import/no-extraneous-dependencies': 0,
            },
        },
    ],
};
