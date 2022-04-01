const webpack = require('@nativescript/webpack');
const { resolve } = require('path');

module.exports = (env) => {
  webpack.init(env);
  webpack.useConfig('angular');

  webpack.chainWebpack((config) => {
    // shared scss
    config.resolve.alias.set(
      '@diligent-nx-knowledge-share/xplat-scss',
      resolve(__dirname, '../../libs/xplat/scss/src/')
    );
    config.resolve.alias.set(
      '@diligent-nx-knowledge-share/xplat-nativescript-scss',
      resolve(__dirname, '../../libs/xplat/nativescript/scss/src/')
    );
  });

  return webpack.resolveConfig();
};
