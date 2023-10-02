const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 module: {
    rules: [
        // loaders are for webpack process different files as we start to import them into our project
        // Babel will be responsible of processing all of the code to run different version in our typical browser
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime'],
                }
            }
        }
    ]
 },
 plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html'
    })
 ]
};