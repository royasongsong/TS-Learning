const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "main.js",
        path: "/dist"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /nodemodules/
            }
        ]
    },
    devtool: process.env.NODEENV === "production" ? false : "inline-source-map",
    devServer: {
        // contentBase: "./dist",
        static : {
            directory : "./dist"
        },
        devMiddleware: {
            stats: "errors-only",
        },
        // stats: "errors-only",
        compress: false,
        host: "localhost",
        port: 8089,
        hot: "only",
    },
    plugins: [
        // 这里在编译之前先删除dist文件夹
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["./dist"]
        }),
        // 这里我们指定编译需要用模板，模板文件是./src/template/index.html，所以接下来我们要创建一个index.html文件
        new HtmlWebpackPlugin({
            template: "./src/template/index.html"
        })
    ]
}
