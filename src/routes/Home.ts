import { Context } from "https://deno.land/x/abc@v1.3.3/mod.ts";

export default function Home(_ctx: Context) {
  return `
    GET /                      Shows this page.
    GET /plugins               Lists all plugins avalible.
    GET /download/:name        Returns the link to the plugin download.
  `;
}