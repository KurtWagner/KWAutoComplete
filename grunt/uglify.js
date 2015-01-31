module.exports = {
        options: {
                compress: { drop_console: true }
        },
        dist: {
                options: { sourceMap : true, preserveComments : 'some' },
                files: [{
                        dest: 'dist/kw-suggest.min.js',
                        src: ['dist/kw-suggest.js'],
                        nonull: true
                }]
        }
};