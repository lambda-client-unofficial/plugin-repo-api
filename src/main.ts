import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";

import Home from './routes/Home.ts';

const app = new Application();

app
  .get('/', Home)
  .start({port: 8080})