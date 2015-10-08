var pkgjson = require('./package.json');

var config = {
    pkg: pkgjson,
    dist: 'dist',
    node_modules: 'node_modules'
};

module.exports = function(grunt) {

    // Les imports
    grunt.loadNpmTasks('grunt-contrib-watch') ;     // MAJ quand modifications sur un fichier
    grunt.loadNpmTasks('grunt-wiredep');            // Injection des composants Bower automatiquement avec Grunt
    grunt.loadNpmTasks('grunt-bootlint');


    // Configuration de Grunt
    grunt.initConfig({
        config: config,

        wiredep: {
            task: {
                src: [
                    'views/**/*.ejs'
                ],
                ignorePath: '../public/'
            }
        },

        // MAJ des fichiers générés lors d'une modification dans un fichier source
        watch: {
            bowerComponents: {
                files: ['public/bower_components/**/*.js'],
                tasks: ['wiredep']
            }
        },

        bootlint: {
            options: {
                stoponerror: false,
                relaxerror: []
            },
            files: ['views/**/*.ejs', '!**/error.ejs']
        }

    });

    // Tâche par défaut : grunt
    grunt.registerTask('default', ['watch']);
};
