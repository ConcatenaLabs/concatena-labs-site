// While the site is a preview, every page sends noindex. Set to false when concatenalabs.com points here.
export const PREVIEW = false;

// A path inside this site, under whatever base the build serves from.
export const url = (path = '') => import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');

export const TESTNET = 'https://sequentiatestnet.com';
export const SEQUENTIA = 'https://sequentia.io';
// Ambra for Android is offered on the public download page, beside Sequentia Core.
export const AMBRA_DOWNLOAD = 'https://sequentiatestnet.com/download/core/#ambra';
export const TELEGRAM = 'https://t.me/sequentia_official';
export const CONTACT = 'info@sequentia.io';
