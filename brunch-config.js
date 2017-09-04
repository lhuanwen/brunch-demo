module.exports = {
    server: {
        port: 3000
    },
    files: {
        javascripts: {
            joinTo: {
                'js/app.js': /^(?!bower_components)|(app)/,
                'js/vendor.js': /^(bower_components)/,
            },
            order: {
                before: [
                    'bower_components/jquery/jquery.js',
                    'bower_components/jquery/jquery-migrate.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
                ]
            }
        },
        stylesheets: {
            joinTo: {
                'css/app.css': /^(app\/sass\/styles.scss)/,
                'css/vendor.css': /^(?!app)|(bower_components)/,
            }
        },
    },
    conventions: {
        ignored: [
            /\/_/, // File beginning by "_" like _settings.scss
            // Brunch does include all Bower components by default, we blacklist unneeded ones.
            /^bower_components\/bootstrap\/dist/,
            /^bower_components\/fancybox\/lib/,
        ]
    },
    plugins: {
        babel: {
            presets: ['es2015'],
            ignore: [
                /^(bower_components|vendor)/,
                'app/legacyES5Code/**/*'
            ],
            pattern: /\.(es6|jsx|js)$/
        },
        sass: {
            allowCache: true
        },
        uglify: {
            mangle: false,
            compress: {
                global_defs: {
                    DEBUG: false
                }
            }
        },
        cleancss: {
            keepSpecialComments: 0,
            removeEmpty: true
        },
        autoReload: {
            enabled: {
                css: true,
                js: true,
                assets: true
            }
        },
        autoprefixer: {
            browsers: ["last 1 version", "> 1%", "ie 8"],
            cascade: false
        }
    },
    overrides: {
        production: {
            optimize: true,
            sourceMaps: false,
            plugins: {autoReload: {enabled: false}},
        }
    }
};
