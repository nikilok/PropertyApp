var path = require('path');

module.exports = {
    entry: './dist/index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    resolve: {
        alias: {
            'hiredis': path.join(__dirname, 'aliases/hiredis.js')
        }
    }
};
