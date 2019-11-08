import { GenerateSW } from 'workbox-webpack-plugin';

export default {
    plugins: [
        new GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            importsDirectory: 'workbox-assets',
        }),
    ],
};
