var coffeeFiles = 'src/coffee/**/*.coffee';

module.exports = function(grunt) {

    grunt.initConfig({
        coffee: {
            compile: {
                options: {
                    sourceMap: true,
                    bare: true
                },
                files: {
                    'build/js/app.js': coffeeFiles
                }
            }
        },
        watch: {
            scripts: {
                files: coffeeFiles,
                tasks: ['coffee']
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');

    grunt.registerTask('default', ['coffee:compile']);
    grunt.registerTask('watcht', ['watch']);
};
