// Module for Sass, SCSS and CSS

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (env, argv) => ({
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // Extract CSS into separate files for production
                    argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        // Extract CSS into separate files for production
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),
    ],
});
