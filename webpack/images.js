// Images module

import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: '../images',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './src/images',
                to: './images',
            },
        ]),
    ],
};
