module.exports = function(grunt) {

    require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        clean: ['dist'],

        mkdir: {
            all: {
                options: {
                    create: ['dist']
                }
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src', src: ['**/*.css'], dest: 'dist/', flatten: true}
                ]
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
                    'dist/simple-notifications.min.js': 'src/simple-notifications.js'
                }
            }
        }

    });

    grunt.registerTask('default', ['clean', 'mkdir', 'uglify', 'copy']);
};