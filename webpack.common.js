const path = require("path");
const HWPP = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "./src/scripts/index.js"),
        auth: path.resolve(__dirname, "./src/scripts/auth.js"),
        reg: path.resolve(__dirname, "./src/scripts/reg.js"),
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
            filename: "auth.html",
            template: "./src/templates/auth.html",
            chunks: ["auth"]
        }),
        new HWPP({
            filename: "register.html",
            template: "./src/templates/reg.html",
            chunks: ["reg"]
        }),
        new HWPP({
            filename: "dashboard.html",
            template: "./src/templates/dashboard.html",
            chunks: ["dashboard"]
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
