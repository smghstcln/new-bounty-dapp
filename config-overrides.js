const webpack = require('webpack');
// eslint-disable-next-line no-unused-vars
const path = require('path');

module.exports = function override(config) {
  // Add the following line to set the public path for the output bundle
  config.output.publicPath = '/';

  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    'crypto': require.resolve('crypto-browserify'),
    'stream': require.resolve('stream-browserify'),
    'assert': require.resolve('assert'),
    'http': require.resolve('stream-http'),
    'https': require.resolve('https-browserify'),
    'os': require.resolve('os-browserify'),
    'url': require.resolve('url'),
  });

  config.resolve.fallback = fallback;

  config.module.rules.push({
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
  });

  config.module.rules.push({
    test: /\.m?js/,
    enforce: 'pre',
    use: ['source-map-loader'],
  });

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      'process': 'process/browser',
      'Buffer': ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};
