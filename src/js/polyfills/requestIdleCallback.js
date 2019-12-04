export default () => {
    if ('requestIdleCallback' in window) return null;

    return import(/* webpackChunkName: 'request-idle-callback' */ 'requestidlecallback-polyfill');
};
