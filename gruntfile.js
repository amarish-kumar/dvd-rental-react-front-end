module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            bfonts: {
                expand: true,
                cwd: './',
                src: ['./node_modules/bootstrap/dist/fonts/**/*.*'],
                dest: './public/css/fonts',
                flatten: true
            },
            fafonts: {
                expand: true,
                cwd: './',
                src: ['./node_modules/font-awesome/fonts/**/*.*'],
                dest: './public/css/fonts',
                flatten: true
            },
            metismenu: {
                expand: true,
                cwd: './',
                src: ['./node_modules/metismenu/src/metisMenu.css'],
                dest: './.tmp/styles/metismenu',
                flatten: true
            },
            datatables: {
                expand: true,
                cwd: './',
                src: ['./node_modules/datatables.net-bs/css/dataTables.bootstrap.css'],
                dest: './.tmp/styles/metismenu',
                flatten: true
            },
            vendor: {
                expand: true,
                cwd: './',
                src: [
                    './node_modules/jquery/dist/jquery.js',
                    './node_modules/metismenu/dist/metisMenu.js',
                    './node_modules/bootstrap/dist/js/bootstrap.js',
                    './node_modules/datatables.net/js/jquery.dataTables.js',
                    './node_modules/datatables.net-bs/js/dataTables.bootstrap.js',
                    './js/app-root-init.js'
                ],
                dest: './.tmp/js/vendor',
                flatten: true
            }
        },
        uglify: {
            jqueryBundle: {
                files: {
                    './public/js/jquery-bundle.min.js': [
                        './.tmp/js/vendor/jquery.js', 
                        './.tmp/js/vendor/metisMenu.js',
                        './.tmp/js/vendor/bootstrap.js',
                        './.tmp/js/vendor/jquery.dataTables.js',
                        './.tmp/js/vendor/dataTables.bootstrapjs',
                        './.tmp/js/vendor/app-root-init.js'
                    ]
                }
            }
        },
        /*concat: {
            options: {
                separator: ';',
            },
            jqueryBundle: {
                src: ['./.tmp/js/vendor/jquery.js', './.tmp/js/vendor/metisMenbu.js'],
                dest: './dist/js/jquery-bundle.js',
            },
        },*/
        cssmin: {
            app: {
                files: [{
                    expand: true,
                    cwd: './.tmp/styles',
                    src: ['./**/*.css', './**/!*.min.css'],
                    dest: './public/css/',
                    ext: '.min.css'
                }]
            }
        },
        clean: {
            tmp: ['./.tmp/']
        },
        less: {
            development: {
                options: {
                    paths: ['./']
                },
                files: {
                    './.tmp/styles/bootstrap/bootstrap.css': './node_modules/bootstrap/less/bootstrap.less',
                    './.tmp/styles/font-awesome/font-awesome.css': './node_modules/font-awesome/less/font-awesome.less',
                    './.tmp/styles/app/dvd-rental-app.css': './less/**/dvd-rental-app.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-rename');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', [
        'copy:bfonts',
        'copy:fafonts',
        'copy:metismenu',
        'copy:datatables',
        'less',
        'cssmin',
        'clean',
        //js tasks
        'copy:vendor',        
        'uglify:jqueryBundle',
        'clean'
    ]);

};