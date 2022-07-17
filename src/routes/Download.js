const scanPlugins = require('../utils/scan.js');

module.exports = async (request, reply) => {
  const {name: pluginName} = request.params;
  const plugins = scanPlugins();
  const foundPlugin = plugins.find((p) => p.plugin === pluginName);
  
  if (foundPlugin) {
    return `https://github.com/lambda-client-unofficial/plugin-repo/releases/download/1.0/${foundPlugin.plugin}-${foundPlugin.version}.jar`;
  } else {
    return 'Plugin not found.'
  }
}