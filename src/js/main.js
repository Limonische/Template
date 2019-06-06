// Styles
import '../sass/styles.sass';

// Libraries

// Modules
import lazyLoadImages from './modules/lazyLoadImages';
import objectFit from './modules/objectFit';

const onLoad = () => {
    lazyLoadImages();
    objectFit();
};

window.addEventListener('load', onLoad);
