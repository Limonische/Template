import merge from 'webpack-merge';

import pug from './pug';
import sass from './sass';
import images from './images';
import fonts from './fonts';
import js from './js';
import html from './html';
import workbox from './workbox';

export default mode => merge(sass(mode), pug, images, fonts, js, html, workbox);
