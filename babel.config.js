module.exports = ({ cache }) => {
    cache(true);

    const presets = [
        [
            '@babel/env',
            {
                useBuiltIns: 'usage',
                corejs: {
                    version: 3,
                    proposals: true,
                },
            },
        ],
    ];
    const plugins = ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-private-methods'];

    return {
        presets,
        plugins,
        sourceMaps: true,
        retainLines: true,
    };
};
