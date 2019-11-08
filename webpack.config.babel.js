// Main webpack configuration file

import merge from 'webpack-merge';
import { resolve } from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import common from './webpack/common';
import devServer from './webpack/devServer';

export default (env, argv) =>
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
            // Remove unnecessary stats
            stats: {
                entrypoints: false,
                children: false,
                warnings: false,
                modules: false,
            },
            optimization: {
                // Minify JavaScript and CSS
                minimizer: [
                    new UglifyJsPlugin({
                        cache: true,
                        parallel: true,
                        sourceMap: argv.mode === 'development',
                    }),
                    new OptimizeCSSAssetsPlugin({}),
                ],
                // Split JavaScript files into separate chunks
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
            // Add source maps for development
            devtool: argv.mode === 'development' ? 'source-map' : false,
            plugins: [new CleanWebpackPlugin()],
        },
        // Merge common module
        common(env, argv),
        // Merge devServer for development
        argv.mode === 'development' ? devServer(env, argv) : null,
    );
