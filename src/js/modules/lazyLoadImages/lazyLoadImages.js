import intersectionObserverPolyfill from '@js/polyfills/intersectionObserver';
import requestIdleCallbackPolyfill from '@js/polyfills/requestIdleCallback';

import lazyImageObserver from '@js/modules/lazyLoadImages/lazyImageObserver';
import loadLazyImage from '@js/modules/lazyLoadImages/loadLazyImage';

export default async () => {
    const polyfills = [intersectionObserverPolyfill(), requestIdleCallbackPolyfill()];

    await Promise.all(polyfills);

    const lazyImages = [...document.querySelectorAll('img.lazy')];

    const loadImagesWhenIdle = () => {
        requestIdleCallback(async () => {
            if (!lazyImages.length) return;

            const idleImages = lazyImages.splice(0, 3);

            idleImages.forEach(idleImage => lazyImageObserver.unobserve(idleImage));

            await Promise.all(idleImages.map(idleImage => loadLazyImage(idleImage)));

            setTimeout(() => loadImagesWhenIdle(), 500);
        });
    };

    lazyImages.forEach(lazyImage => {
        lazyImageObserver.observe(lazyImage);
    });

    setTimeout(() => loadImagesWhenIdle(), 1000);
};
