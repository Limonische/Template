// Common module for development and production

import merge from 'webpack-merge';

import pug from './pug';
import sass from './sass';
import images from './images';
import fonts from './fonts';
import js from './js';
import html from './html';
import workbox from './workbox';

// Merge all common modules
export default (env, argv) => merge(sass(env, argv), pug, images, fonts, js, html, workbox);
