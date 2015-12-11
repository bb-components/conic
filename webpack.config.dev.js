var webpack = require('webpack')
var path = require('path')
var externals = require('./externals')

var config = {
    devtool: 'eval-source-map',
    watch: true,

    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8090',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
        vendor: [
            'react-dnd',
            'react-json-tree',
            'jquery',
            'react',
            'react-dom',
            'classnames',
            'lodash',
            'react-router',
            'flux'
        ]
    },

    externals: externals,

    output: {
        path: __dirname + '/output/',
        publicPath: '/output/',
        filename: 'index.js'
    },

    module: {
        noParse: [],
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel?presets[]=react,presets[]=es2015', 'html-path-loader']
            }, {
                test: /\.(scss|css)/,
                exclude: /node_modules/,
                loaders: ['style', 'css', 'autoprefixer', 'sass', 'css-path-loader']
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
                loader: 'url'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}

module.exports = config