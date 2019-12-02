import merge from 'webpack-merge';
import { resolve } from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import common from './webpack/common';
import devServer from './webpack/devServer';

export default (_, { mode, share }) =>
    merge(
        {
            entry: {
                main: './src/js/main.js',
            },
            output: {
                filename: './js/[name].bundle.js',
                chunkFilename: './js/[name].bundle.js',
                path: resolve(__dirname, 'dist'),
            },
            stats: {
                entrypoints: false,
                children: false,
                warnings: false,
                modules: false,
            },
            optimization: {
                minimizer: [
                    new UglifyJsPlugin({
                        cache: true,
                        parallel: true,
                        sourceMap: mode === 'development',
                    }),
                    new OptimizeCSSAssetsPlugin({}),
                ],
                splitChunks: {
                    cacheGroups: {
                        commons: {
                            chunks: 'initial',
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                        },
                        vendor: {
                            test: /node_modules/,
                            chunks: 'initial',
                            name: 'vendor',
                            priority: 10,
                            enforce: true,
                        },
                    },
                },
            },
            devtool: mode === 'development' ? 'source-map' : false,
            plugins: [new CleanWebpackPlugin()],
            resolve: {
                extensions: ['.js', '.ts', '.json'],
                alias: { '@': resolve(__dirname, 'src') },
            },
        },
        common(mode),
        mode === 'development' ? devServer(share) : null,
    );
