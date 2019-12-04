export default lazyImage =>
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
