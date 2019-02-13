module.exports = function(grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-webfont');

	grunt.initConfig({
		webfont: {
			ios: {
				src: 'src/ios/*.svg',
				dest: 'dist/wavicon/ios/fonts',
				destCss: 'dist/wavicon/ios/css',
				options: {
					hashes: false,
					fontBaseName: 'wavicon',
					fontFamilyName: 'wavicon',
					templateOptions: {
						baseClass: "wi",
						classPrefix: "wi-",
						mixinPrefix: "wi-"
					},
					// stylesheet: 'css',
					// fontFilename: 'wavicon',
					htmlDemoTemplate: 'templates/demo.html',
					font: 'wavicon'
				}
			},
			android: {
				src: 'src/android/*.svg',
				dest: 'dist/wavicon/android/fonts',
				destCss: 'dist/wavicon/android/css',
				options: {
					hashes: false,
					fontBaseName: 'wavicon',
					fontFamilyName: 'wavicon',
					templateOptions: {
						baseClass: "wi",
						classPrefix: "wi-",
						mixinPrefix: "wi-"
					},
                    // stylesheet: 'css',
					// fontFilename: 'wavicon',
					htmlDemoTemplate: 'templates/demo.html',
                    font: 'wavicon'
				}
			}			
		},
		clean: ['dist']
	});

	grunt.loadTasks('tasks');
	grunt.registerTask('default', ['webfont'/*, 'test', 'clean'*/]);
	grunt.registerTask('build', ['default']);

};
