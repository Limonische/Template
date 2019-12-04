import loadLazyImage from '@js/modules/lazyLoadImages/loadLazyImage';

const lazyImageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const lazyImage = entry.target;

            loadLazyImage(lazyImage);
            lazyImageObserver.unobserve(lazyImage);
        }
    });
});

export default lazyImageObserver;
