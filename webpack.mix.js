const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
  .version()
  .sass('resources/sass/app.scss', 'public/css')
  .version()
  .browserSync({
    proxy: 'https://spwp.test',
    port: 3400,
    https: {
      key: '/Users/cci/local_ssl/localhost.key',
      cert: '/Users/cci/local_ssl/localhost.crt',
    },
  })
  .disableSuccessNotifications()
  .extract();
