// pug module

module.exports = {
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: 'pug-loader',
            },
        ],
    },
};
