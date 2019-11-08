import '../sass/styles.sass';

import lazyLoadImages from './modules/lazyLoadImages';

const onLoad = () => {
    lazyLoadImages();
};

window.addEventListener('load', onLoad);
