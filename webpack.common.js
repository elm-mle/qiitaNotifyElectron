const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

const buildPath = path.join(__dirname, 'build');

module.exports = [
    {
        target: "electron-main",
        entry: path.join(__dirname, 'src', 'main', 'main.ts'),
        output: {
            path: buildPath,
            filename: "main.js"
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: ['ts-loader'],
                    exclude: path.join(__dirname, 'node_modules')
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
    },
    // RENDERER ==============================================================
    {
        target: "web",
        entry: path.join(__dirname, 'src', 'renderer', 'root', 'index.tsx'),
        output: {
            path: buildPath,
            filename: "index.js"
        },

        module: {
            rules: [
                {
                    test: /\.html$/,
                    use : "html-loader",
                },
                {
                    test: /\.(ts|tsx)$/,
                    use: "ts-loader",
                    exclude: path.join(__dirname, 'node_modules')
                },
                {
                    test: /(\.css|\.scss)$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /(\.png)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }]
                },
            ],

        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx', '.jsx', '.css', '.scss']
        },


        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'renderer', 'root', 'index.html')
            })
        ],

    },
    {
        target: 'electron-renderer',
        mode: "development",
        entry: path.join(__dirname, "src", "main", "preload.ts"),
        output: {
            path: buildPath,
            filename: "preload.js"
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: ['ts-loader'],
                    exclude: path.join(__dirname, 'node_modules')
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
    }
]
