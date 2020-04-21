const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.append("Provide", new ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Pooper: ['pooper.js', 'default']
}))

module.exports = environment
