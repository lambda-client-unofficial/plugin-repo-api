import { Context } from "https://deno.land/x/abc@v1.3.3/mod.ts";

import scanPlugins from '../utils/scan.ts';

export default function Plugins(ctx: Context) {
  ctx.response.status = 200;
  ctx.response.body = JSON.stringify(scanPlugins());
  return
}

