const ExtractTextPlugin     = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const path                  = require('path');

module.exports = {
    entry:{
        index        : './bin/index.jsx',
    },

    output: {
        path        : path.resolve(__dirname,'public'),
        filename    : 'js/[name].js',
    },

    devServer: {
        contentBase : path.join(__dirname, "public"),
        compress    : true,
        port        : 3005,
        open        : true,
        stats       : 'errors-only',
    },

    module: {
        rules:[
            {
                test: /\.config.css$/,
                loader: 'babel-loader!postcss-variables-loader'
            },
            {
                test    : /\.(scss|css)/,
                use     : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use : ['css-loader','postcss-loader','sass-loader']
                })
                // use: ['style-loader','css-loader','postcss-loader','sass-loader']
            },

            {
                test    : /\.(jsx?|js)$/,
                exclude : /node_modules/,
                use     : 'babel-loader'
            },

            {
                test    : /\.json$/,
                use     : 'json-loader'
            },

            {
                test: /\.md$/,
                use: ['react-markdown-loader']
            },

            {
                test    : /\.pug$/,
                use     : ['html-loader','pug-html-loader']
            },

            {
                test    : /\.(png|jpg|svg)$/,
                use     : 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename    : 'index.html',
            minify      : {
                collapseWhitespace: false
            },
            hash        : true,
            template    : './bin/index.pug',
        }),

        new ExtractTextPlugin({
            filename:  (getPath) => {
                return getPath('css/[name].css').replace('css/js', 'css');
            },
            allChunks: false
        }),
    ]
}
