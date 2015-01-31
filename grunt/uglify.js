module.exports = {
        options: {
                compress: { drop_console: true }
        },
        dist: {
                options: { sourceMap : true, preserveComments : 'some' },
                files: [{
                        dest: 'dist/kw-auto-complete.min.js',
                        src: ['dist/kw-auto-complete.js'],
                        nonull: true
                }]
        }
};