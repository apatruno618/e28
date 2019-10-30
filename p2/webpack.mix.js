const mix = require('laravel-mix');

mix.js('src/script.js', 'js');

mix.options({
    hmrOptions: {
        host: 'p2.loc',
        port: 8080
    }
})