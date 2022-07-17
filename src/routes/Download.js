const scanPlugins = require('../utils/scan.js');

module.exports = function Download(request, reply) {
  const {name: pluginName} = request.params;
  const plugins = scanPlugins();
  const foundPlugin = plugins.find((p) => p.plugin === pluginName);
  
  if (foundPlugin) {
    reply.send(`https://github.com/lambda-client-unofficial/plugin-repo/releases/download/1.0/${foundPlugin.plugin}-${foundPlugin.version}.jar`);
  } else {
    reply.status(404)
    reply.send('Plugin not found')
  }
}