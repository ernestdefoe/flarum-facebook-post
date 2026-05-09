const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    admin: './src/admin.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'module.exports',
    libraryTarget: 'assign',
  },
  externals: {
    '@flarum/core/forum': 'flarum.core',
    '@flarum/core/admin': 'flarum.core',
    mithril: 'm',
    jquery: 'jQuery',
  },
};
