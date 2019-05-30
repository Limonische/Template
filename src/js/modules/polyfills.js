const intersectionObserverPolyfill = () => {
    if (
        !('IntersectionObserver' in window)
        || !('IntersectionObserverEntry' in window)
        || !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
    ) {
        return import(/* webpackChunkName: 'intersection-observer' */ 'intersection-observer');
    }

    return null;
};

const requestIdleCallbackPolyfill = () => {
    if (!('requestIdleCallback' in window)) {
        return import(/* webpackChunkName: 'request-idle-callback' */ 'requestidlecallback-polyfill');
    }

    return null;
};

export { intersectionObserverPolyfill, requestIdleCallbackPolyfill };
