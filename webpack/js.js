export default {
    module: {
        rules: [
            {
                test: /\.(j|t)s$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
        ],
    },
};
