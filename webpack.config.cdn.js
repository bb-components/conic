var webpack = require('webpack')
var path = require('path')

var config = {
    entry: {
        React: "./node_modules/react",
        ReactDOM: "./node_modules/react-dom/dist/react-dom.min.js",
        ReactRouter: './node_modules/react-router/umd/ReactRouter.min.js',
        Flux: './node_modules/flux',
        classNames: './node_modules/classnames',
        _: './node_modules/lodash',
        $: './node_modules/jquery',
        ReactDnd: './node_modules/react-dnd'
    },
    output: {
        path: path.join(__dirname, "output/cdn"),
        filename: "[name].js",
        library: "[name]",
        libraryTarget: "umd"
    },
    externals: {
        'react': 'React'
    },
    module: {
        loaders: [
            {
                test: /\.(scss|css)/,
                include: /node_modules/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
}

module.exports = config