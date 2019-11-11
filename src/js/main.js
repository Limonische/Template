import '@/sass/styles.sass';

import lazyLoadImages from '@/js/modules/lazyLoadImages';

const onLoad = () => {
    lazyLoadImages();
};

window.addEventListener('load', onLoad);
