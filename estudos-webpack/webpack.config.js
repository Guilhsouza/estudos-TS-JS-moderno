const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        main: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.ts$/,
            use: ['ts-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}
