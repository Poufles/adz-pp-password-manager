const path = require("path");
const HWPP = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "./src/scripts/index.js"),
        login: path.resolve(__dirname, "./src/scripts/login.js"),
        dashboard: path.resolve(__dirname, "./src/scripts/dashboard.js")
    },
    output: {
        filename: "[name][contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename: "[name][ext]",
    },
    plugins: [
        new HWPP({
            filename: "index.html",
            template: "./src/templates/index.html",
            chunks: ["app"]
        }),
        new HWPP({
            filename: "login.html",
            template: "./src/templates/login.html",
            chunks: ["login"]
        }),
        new HWPP({
            filename: "dashboard.html",
            template: "./src/templates/dashboard.html",
            chunks: ["app"]
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
