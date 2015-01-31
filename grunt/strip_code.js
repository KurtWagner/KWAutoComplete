module.exports = {
        options: {
                start_comment: "test-code",
                end_comment: "end-test-code",
        },
        dist: {
                files: [{
                        src: 'src/kw-auto-complete.js',
                        dest: 'dist/kw-auto-complete.js'
                }]
        }
};