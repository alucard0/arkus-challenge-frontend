const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@api': 'src/api',
    '@customHooks' : 'src/customHooks',
    '@utils': 'src/utils',
    '@components': 'src/components'
  })(config)

  return config
}
