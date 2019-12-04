import '@sass/styles.sass';

import lazyLoadImages from '@js/modules/lazyLoadImages/lazyLoadImages';

const onLoad = () => {
    lazyLoadImages();
};

window.addEventListener('load', onLoad);
