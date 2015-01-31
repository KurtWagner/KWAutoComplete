module.exports = {
        // PhantomJS
        watchPhantomJS: { configFile: 'karma.conf.js', browsers: ['PhantomJS'] },
        testPhantomJS: { configFile: 'karma.conf.js', browsers: ['PhantomJS'],  autoWatch: false, singleRun: true },
        
        // Chrome
        watchChrome: { configFile: 'karma.conf.js', browsers: ['Chrome'] },
        testChrome: { configFile: 'karma.conf.js', browsers: ['Chrome'],  autoWatch: false, singleRun: true },
        
        // Chrome
        watchFirefox: { configFile: 'karma.conf.js', browsers: ['Firefox'] },
        testFirefox: { configFile: 'karma.conf.js', browsers: ['Firefox'],  autoWatch: false, singleRun: true },
        
        // opens no browser
        watchNoBrowser: { configFile: 'karma.conf.js', browsers: [] },
};