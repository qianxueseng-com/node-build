var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  test: /\.less$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader'),
};
