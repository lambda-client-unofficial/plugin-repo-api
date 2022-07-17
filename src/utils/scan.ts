import * as path from "https://deno.land/std@0.148.0/path/mod.ts";

export default function scanPlugins(): Plugin[] {
  const plugins: Plugin[] = [];
  const decoder = new TextDecoder('utf-8');
  [...Deno.readDirSync(path.resolve('./plugin-repo/plugins'))].forEach((plugin) => {
    const { name } = plugin;
    const pluginPath = path.resolve(`./plugin-repo/plugins/${name}`);
    const versionFile = decoder.decode(Deno.readFileSync(`${pluginPath}/version`)).trim().split(" ");
    plugins.push(
      {
        name,
        source: decoder.decode(Deno.readFileSync(`${pluginPath}/source`)).trim(),
        version: versionFile[0],
        apiVersion: versionFile[1],
      }
    )
  });
  return plugins;
}

interface Plugin {
  name: string,
  source: string,
  version: string,
  apiVersion: string,
}