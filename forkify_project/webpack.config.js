// // use node path function 
// import path from 'path';
// // exports using nodejs syntax
// export const entry = './src/js/idnex.js';
// export const output = {
//     path: '',
//     filename: 'bundle.js'
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
            filename: 'js/bundle.js'
    },
    // putting this in package.json mode: 'development' // this makes it faster for development time.
    // webserver auto compiles and loads files 
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            // often pass options using objects.
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};