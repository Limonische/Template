module.exports = ({ cache }) => {
    cache(true);

    const presets = [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: 3,
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
