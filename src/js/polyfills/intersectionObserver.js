export default () => {
    if (
        'IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype
    )
        return null;

    return import(/* webpackChunkName: 'intersection-observer' */ 'intersection-observer');
};
