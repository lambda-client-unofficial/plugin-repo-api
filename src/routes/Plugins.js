const scanPlugins = require('../utils/scan.js');

module.exports = function Plugins(request, reply) {
  reply.send(JSON.stringify(scanPlugins()))
}

