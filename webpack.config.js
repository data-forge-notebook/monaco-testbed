const webpack = require('webpack');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

const outputDir = path.resolve(__dirname, "dist");

module.exports = {
    entry: {
        "index": "./src/index.tsx",
		'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
		'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
		'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
		'html.worker': 'monaco-editor/esm/vs/language/html/html.worker',
		'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker'
    },
    output: {
        globalObject: 'self',
        filename: "[name].bundle.js",
        path: outputDir,
    },

    mode: "development",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    devServer: {
        static: {
            directory: outputDir,
        },
        hot: false,
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},

			{
				test: /\.ttf$/,
				use: ['file-loader']
			},

            { 
                test: /\.tsx?$/, 
                loader: "ts-loader", 
                options: { transpileOnly: true },
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new ForkTsCheckerNotifierWebpackPlugin({ title: 'TypeScript', excludeWarnings: false }),        

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/index.html",
                    to: outputDir,
                },
            ],
        }),
    ],
};