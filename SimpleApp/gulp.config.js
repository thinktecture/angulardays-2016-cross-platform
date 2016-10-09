'use strict';

module.exports = {
    systemJsConfig: './system.config.js',
    source: {
        folder: './src/Games/',
        files: {
            injectables: [
                './dist/www/scripts/vendor.min.js',
                './dist/www/scripts/system.min.js',
                './dist/www/scripts/system.setup.js',
                './dist/www/css/vendor.min.css',
                './dist/www/css/app.css',
                './dist/www/scripts/shim.min.js',
                './dist/www/scripts/zone.js',
                './dist/www/scripts/reflect.js'
            ],
            main: [
                './src/Games/index.html'
            ],
            systemSetupScript: './src/Games/system.setup.js',
            app: {
                everything: ['./src/Games/app/**/*', './src/Games/system.setup.js'],
                ts: [
                    './src/Games/app/**/*.ts'
                ],
                html: [
                    './src/Games/app/**/*.html'
                ],
                css: [

                    './src/Games/css/**/*.css'
                ],
                componentCss: [
                    './src/Games/app/**/*.css'
                ],
                assets: [
                    './src/Games/assets/**/*.*'
                ]
            },
            vendorStylesheets: [
                './src/Games/vendor/bootstrap/css/bootstrap.css',
                './src/Games/vendor/admin-lte/css/AdminLTE.css',
                './src/Games/vendor/admin-lte/css/skins/_all-skins.css',
                './src/Games/vendor/font-awesome/css/font-awesome.css',
                './src/Games/vendor/pNotify/pnotify.custom.css',
                './src/Games/vendor/leaflet-js/leaflet.css'
            ],
            vendorFonts: [
                './src/Games/vendor/font-awesome/fonts/*.*',
                './src/Games/vendor/bootstrap/fonts/*.*'
            ],
            shim: [
                './node_modules/es6-shim/es6-shim.min.js',
                './node_modules/angular2/es6/dev/src/testing/shims_for_IE.js'
            ],
            vendorJs: [
                './src/Games/vendor/hammerjs/hammer.js',
                './src/Games/vendor/jquery/jquery-2.1.4.js',
                './src/Games/vendor/jquery/jquery.hammer.js',
                './src/Games/vendor/jquery/jquery.slimscroll.js',
                './src/Games/vendor/pNotify/pnotify-adapter.js',
                './src/Games/vendor/pNotify/pnotify.custom.js',
                './src/Games/vendor/bootstrap/js/bootstrap.js',
                './src/Games/vendor/fastclick/fastclick.js',
                './src/Games/vendor/admin-lte/js/app.js'
            ],
            angular2rc1deps: [
                './node_modules/core-js/client/shim.min.js',
                './node_modules/zone.js/dist/zone.js',
                './node_modules/reflect-metadata/reflect.js'
            ],
            angular2: './node_modules/@angular/**/*',
            rxjs: './node_modules/rxjs/**/*',
            systemJs: './node_modules/systemjs/dist/system.src.js'
        }
    },
    ts: {
        config: './tsconfig.json'
    },
    targets: {
        systemMinJs: 'system.min.js',
        vendorMinJs: 'vendor.min.js',
        vendorMinCss: 'vendor.min.css',
        buildFolder: './dist/www',
        resourcesFolder: './resources/',
        appFolder: 'app',
        stylesFolder: 'css',
        minified: {
            js: 'app.js',
            css: 'app.css',
            templateCache: 'ng-templates.js'
        }
    }
};
