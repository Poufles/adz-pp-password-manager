const path = require("path");
const HWPP = require("html-webpack-plugin");

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, "./src/scripts/index.js"),
    },
    output: {
        filename: "[name][contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename: "[name][ext]",
    },
    plugins: [
        new HWPP({
            title: "LowKey",
            filename: "index.html",
            template: "./src/templates/login.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html/i,
                loader: "html-loader"
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};
