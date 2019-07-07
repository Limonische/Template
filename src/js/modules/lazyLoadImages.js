import { intersectionObserverPolyfill, requestIdleCallbackPolyfill } from './polyfills';

// Lazy loading for images
const lazyLoadImages = async () => {
    const polyfills = [intersectionObserverPolyfill(), requestIdleCallbackPolyfill()];

    await Promise.all(polyfills);

    const lazyImages = [...document.querySelectorAll('img.lazy')];

    // Load selected image
    const loadLazyImage = lazyImage =>
        new Promise((resolve, reject) => {
            if (!lazyImage.classList.contains('lazy')) resolve();

            const { src, srcset } = lazyImage.dataset;

            lazyImage.addEventListener('load', resolve);
            lazyImage.addEventListener('error', reject);

            if (src) lazyImage.src = src;
            if (srcset) lazyImage.srcset = srcset;
            if (src && !srcset) lazyImage.srcset = '';

            lazyImage.classList.remove('lazy');
        });

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

    // Load images in batches when browser is idle
    const loadImagesWhenIdle = () => {
        requestIdleCallback(async () => {
            if (!lazyImages.length) return;

            const idleImages = lazyImages.splice(0, 3);

            idleImages.forEach(idleImage => lazyImageObserver.unobserve(idleImage));

            await Promise.all(idleImages.map(idleImage => loadLazyImage(idleImage)));

            setTimeout(() => {
                loadImagesWhenIdle();
            }, 500);
        });
    };

    lazyImages.forEach(lazyImage => {
        // Observe lazy images
        lazyImageObserver.observe(lazyImage);
    });

    setTimeout(() => {
        loadImagesWhenIdle();
    }, 1000);
};

export default lazyLoadImages;
