import { Context, HttpException } from "https://deno.land/x/abc@v1.3.3/mod.ts";

import scanPlugins from '../utils/scan.ts';

export default function Download(ctx: Context) {
  const {name: pluginName} = ctx.params;
  const plugins = scanPlugins();
  const foundPlugin = plugins.find((p) => p.name === pluginName);
  
  if (foundPlugin) {
    return `https://github.com/lambda-client-unofficial/plugin-repo/releases/download/1.0/${foundPlugin.name}-${foundPlugin.version}.jar`;
  } else {
    throw new HttpException('Plugin not found.', 404)
  }
}