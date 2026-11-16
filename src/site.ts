// true makes every page send noindex (a preview); false for the live site.
export const PREVIEW = false;

// A path inside this site, under whatever base the build serves from.
export const url = (path = '') => import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');

export const TESTNET = 'https://sequentiatestnet.com';
export const SEQUENTIA = 'https://sequentia.io';
// Ambra for Android: the newest signed APK, under the stable name the release
// publisher keeps pointing at each new version.
export const AMBRA_DOWNLOAD = 'https://sequentiatestnet.com/download/ambra-latest.apk';
export const TELEGRAM = 'https://t.me/sequentia_official';
export const CONTACT = 'info@sequentia.io';
