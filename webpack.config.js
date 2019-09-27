var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app/app.jsx", // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname, './dist'),     // путь к каталогу выходных файлов - папка dist
        // publicPath: '/dist/',
        filename: "bundle.js"       // название создаваемого файла
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'To do list',
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [   //загрузчик для js
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react",
                        "@babel/preset-flow",
                        "react"
                    ]    // используемые плагины
                }
            },
            {
                test: /\.css?$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};