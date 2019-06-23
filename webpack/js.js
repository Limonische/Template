// JavaScript module

const stylish = require('eslint/lib/cli-engine/formatters/stylish');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            formatter: stylish,
                        },
                    },
                ],
            },
        ],
    },
};
