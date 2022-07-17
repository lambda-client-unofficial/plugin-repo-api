const scanPlugins = require('../utils/scan.js');

module.exports = async (request, reply) => {
  return scanPlugins()
}

