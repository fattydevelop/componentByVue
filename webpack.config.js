module.exports = {
    entry: './src/main.js',
    output: {
        filename: './build/build.js'
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test:/\.less$/, loader: 'style!css!less' }
        ]
    }
}