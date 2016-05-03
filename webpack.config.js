var webpack = require('webpack')
var externals = require('./externals')

module.exports = {
    entry: [
        './src/main.tsx'
    ],

    output: {
        path: __dirname + '/output/',
        publicPath: '/output/',
        filename: './index.js'
    },

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    externals: externals,

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015', 'html-path-loader']
            }, {
                test: /\.(scss|css)/,
                exclude: /node_modules/,
                loaders: ['style', 'css', 'autoprefixer', 'css-path-loader', 'sass']
            }, {
                test: /\.(scss|css)/,
                include: /node_modules/,
                loaders: ['style', 'css', 'autoprefixer', 'sass']
            }, {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url?limit=3000&name=img/[hash:8].[name].[ext]'
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=3000&name=font/[hash:8].[name].[ext]'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.tsx?$/,
                loaders: ['html-path-loader', 'ts-loader']
            }
        ]
    }
}