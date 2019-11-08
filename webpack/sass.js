import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (env, { mode }) => ({
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
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
    plugins: [new MiniCssExtractPlugin({ filename: './css/[name].css' })],
});
