import { intersectionObserverPolyfill, requestIdleCallbackPolyfill } from './polyfills';

// Lazy loading for images
const lazyLoadImages = async () => {
    const polyfills = [
        intersectionObserverPolyfill(),
        requestIdleCallbackPolyfill(),
    ];

    await Promise.all(polyfills);

    const lazyImages = [...document.querySelectorAll('img.lazy')];

    // Load selected image
    const loadLazyImage = lazyImage => {
        const { src, srcset } = lazyImage.dataset;

        if (src) lazyImage.src = src;
        if (srcset) lazyImage.srcset = srcset;

        lazyImage.classList.remove('lazy');
    };

    // Create observer for lazy images
    const lazyImageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;

                loadLazyImage(lazyImage);
                lazyImageObserver.unobserve(lazyImage);
            }
        });
    });

    lazyImages.forEach(lazyImage => {
        // Observe lazy images
        lazyImageObserver.observe(lazyImage);

        // Load images when browser is free
        requestIdleCallback(() => {
            loadLazyImage(lazyImage);
            lazyImageObserver.unobserve(lazyImage);
        });
    });
};

export default lazyLoadImages;
