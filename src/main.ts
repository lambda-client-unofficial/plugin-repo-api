import { Application } from 'https://deno.land/x/abc@v1.3.3/mod.ts';

import Home from './routes/Home.ts';
import Plugins from './routes/Plugins.ts';
import Download from './routes/Download.ts';

const app = new Application();

app
  .get('/', Home)
  .get('/plugins', Plugins)
  .get('/download/:name', Download)
  .start({port: 8080})

console.log('Listening on port 8080.');
