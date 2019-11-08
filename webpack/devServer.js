import { HotModuleReplacementPlugin } from 'webpack';

let devServer;

function reloadHtml() {
    const cache = {};
    const plugin = { name: 'CustomHtmlReloadPlugin' };

    this.hooks.compilation.tap(plugin, compilation => {
        compilation.hooks.htmlWebpackPluginAfterEmit.tap(plugin, data => {
            const orig = cache[data.outputName];
            const html = data.html.source();

            if (orig && orig !== html) devServer.sockWrite(devServer.sockets, 'content-changed');

            cache[data.outputName] = html;
        });
    });
}

export default (env, { share }) => ({
    devServer: {
        before(app, server) {
            devServer = server;
        },
        compress: true,
        host: share ? '0.0.0.0' : 'localhost',
        open: true,
        port: 3000,
        hot: true,
        disableHostCheck: true,
        overlay: true,
        stats: {
            entrypoints: false,
            children: false,
            warnings: false,
            modules: false,
        },
    },
    plugins: [new HotModuleReplacementPlugin(), reloadHtml],
});
