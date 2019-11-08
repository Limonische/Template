// HTML module

import { readdirSync } from 'fs';
import { resolve } from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlBeautifyWebpackPlugin from 'html-beautify-webpack-plugin';

// Generate HTML pages from .pug files
function generateHtmlPlugins(templateDir) {
    const templateFiles = readdirSync(resolve(__dirname, templateDir));

    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];

        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: 'body',
            minify: {
                removeComments: true,
                removeScriptTypeAttributes: true,
                useShortDoctype: true,
            },
        });
    });
}

const htmlPlugins = generateHtmlPlugins('../src/pug/views');

export default {
    plugins: [
        // Add all instanses of HtmlWebpackPlugin to plugins
        ...htmlPlugins,
        // Beautify HTML output
        new HtmlBeautifyWebpackPlugin({
            config: {
                html: {
                    editorconfig: true,
                    end_with_newline: true,
                    preserve_newlines: true,
                    indent_inner_html: true,
                    wrap_line_length: 0,
                    unformatted: ['p', 'i', 'b', 'span'],
                },
            },
        }),
    ],
};
