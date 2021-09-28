const path = require("path");

module.exports = {
    entry: "./src/main.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components|backend)/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname, "public")
        },
        port: 3000,
        client: {
            overlay: true
        },
        historyApiFallback: true
    }
};