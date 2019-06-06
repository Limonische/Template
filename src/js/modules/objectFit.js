const objectFit = async () => {
    if ('objectFit' in document.documentElement.style) return;

    const { default: objectFitImages } = await import(/* webpackChunkName: 'object-fit-images' */ 'object-fit-images');

    objectFitImages();
};

export default objectFit;
