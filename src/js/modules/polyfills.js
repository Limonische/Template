const intersectionObserverPolyfill = () => {
    if (
        'IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype
    )
        return null;

    return import(/* webpackChunkName: 'intersection-observer' */ 'intersection-observer');
};

const requestIdleCallbackPolyfill = () => {
    if ('requestIdleCallback' in window) return null;

    return import(/* webpackChunkName: 'request-idle-callback' */ 'requestidlecallback-polyfill');
};

export { intersectionObserverPolyfill, requestIdleCallbackPolyfill };
