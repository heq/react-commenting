var path = require('path')
var webpack = require('webpack')

var port = 80
var srcPath = path.join(__dirname, '/../src')

module.exports = {
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    port: port,
    publicPath: '/',
  },
  entry: ['./src/entry'],
  module: {
    rules: [
      {
        enforce: 'pre',
        include: path.join(__dirname, 'src'),
        test: /\.(js|jsx)$/,
        use: 'eslint-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // fetch polyfill
    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
  ],
  resolve: {
    alias: {
      components: srcPath + '/components/',
      config: srcPath + '/config/' + process.env.REACT_WEBPACK_ENV,
      store: srcPath + '/store/',
      styles: srcPath + '/styles/',
    },
    extensions: ['.js', '.jsx', '_pb.js'],
  },
}
