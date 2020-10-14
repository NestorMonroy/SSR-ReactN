const path = require('path');

module.exports = {
    // Inform webpack that we're building a bundle for nodeJS, rather than for the browser
    target: 'node',

    // Tell webpack the doot file of our server application
    entry: './src/index.js',

    // Tell webpack where to put the output file thah is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /nodule_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }

};