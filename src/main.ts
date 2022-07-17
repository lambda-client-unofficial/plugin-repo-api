import { Application } from 'https://deno.land/x/abc@v1.3.3/mod.ts';

import Home from './routes/Home.ts';
import Plugins from './routes/Plugins.ts';
import Download from './routes/Download.ts';

const app = new Application();
const port = parseInt(Deno.env.get("PORT") ?? "8080", 10);
app
  .get('/', Home)
  .get('/plugins', Plugins)
  .get('/download/:name', Download)
  .start({port: port})

console.log(`Listening on port ${port}.`);
