const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    publicPath: '/m2r/',
    devServer: {
        port: 8888
    },
    productionSourceMap: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(
                new CompressionPlugin({
                    algorithm: 'gzip',
                    test: /\.js$|\.html$|\.css$/,
                    threshold: 10240,
                    minRatio: 0.8,
                    deleteOriginalAssets: false
                })
            );
        }
    }
}