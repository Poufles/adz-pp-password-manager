const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: "source-map",
    devServer: {
        watchFiles: [ "./src/templates/*.html", "./src/styles/*.css", ".src/scripts/*.js" ],
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        open: true,
        port: 3000,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
})
