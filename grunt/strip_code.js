module.exports = {
        options: {
                start_comment: "test-code",
                end_comment: "end-test-code",
        },
        dist: {
                files: [{
                        src: 'src/kw-suggest.js',
                        dest: 'dist/kw-suggest.js'
                }]
        }
};