const path = require('path')

module.exports = {
  mode: 'development',
  entry: 'exchange.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true
}
