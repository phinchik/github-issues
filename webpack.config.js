const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                loader: 'react-svg-loader',
                options: {
                    jsx: true // true outputs JSX tags
                }
            }
        ],
    },
};