const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")
const package = require("./package.json");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        background: './src/background.ts',
        inject: './src/inject.ts',
        popup: './src/popup.ts',
        styles: './src/popup.css'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/popup.html',
            filename: `${path.resolve(__dirname, 'dist')}/popup.html`,
            chunks: ['popup']

        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: "src/manifest.json",
                to: path.resolve(__dirname, 'dist'),
                transform: (content, _) => {
                    return Buffer.from(JSON.stringify({
                        name: package.name,
                        description: package.description,
                        version: package.version,
                        author: package.author,
                        ...JSON.parse(content.toString())
                    }))
                }
            }]
        })
    ]
};
