module.exports = function(grunt) {

    require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        clean: ['dist'],

        mkdir: {
            default: {
                options: {
                    create: ['dist']
                }
            }
        },

        copy: {
            default: {
                files: [
                    {expand: true, cwd: 'src/scripts', src: ['*.js'], dest: 'dist/', flatten: true}
                ]
            }
        },

        sass: {
            options: {
                sourceMap: false
            },
            default: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'dist/simple-notifications.css': 'src/styles/main.scss'
                }
            },
            minified: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/simple-notifications.min.css': 'src/styles/main.scss'
                }
            }
        },

        uglify: {
            default: {
                options: {
                    banner: "/*\nsimple-notifications.js. https://github.com/simple-notifications.\nBuilt <%= grunt.template.today() %>.\n*/\n\n",
                    compress: true,
                    sourceMap: false,
                    mangle: true
                },
                files: {
                    'dist/simple-notifications.min.js': 'dist/simple-notifications.js'
                }
            }
        }

    });

    grunt.registerTask('default', ['clean', 'mkdir', 'sass', 'copy', 'uglify']);
};