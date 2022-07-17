const path = require('path')
const fs = require('graceful-fs')

module.exports = function scanPlugins() {
  const plugins = [];
  fs.readdirSync(path.resolve('./plugin-repo/plugins')).forEach((plugin) => {
    const pluginPath = path.resolve(`./plugin-repo/plugins/${plugin}`);
    const versionFile = fs.readFileSync(`${pluginPath}/version`, 'utf-8').trim().split(" ");
    plugins.push(
      {
        plugin,
        source: fs.readFileSync(`${pluginPath}/source`, 'utf-8').trim(),
        version: versionFile[0],
        apiVersion: versionFile[1],
      }
    )
  });
  return plugins;
}
