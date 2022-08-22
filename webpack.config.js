const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin")
const package_data = require("./package.json");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        background: './src/background.ts',
        inject: './src/inject.ts',
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
        new CopyWebpackPlugin({
            patterns: [{
                from: "src/manifest.json",
                to: path.resolve(__dirname, 'dist'),
                transform: (content, _) => {
                    return Buffer.from(JSON.stringify({
                        name: package_data.name,
                        description: package_data.description,
                        version: package_data.version,
                        author: package_data.author,
                        ...JSON.parse(content.toString())
                    }))
                }
            }]
        })
    ]
};
