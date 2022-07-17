const fastify = require('fastify')()

fastify.get('/', require('./routes/Home'))
fastify.get('/plugins', require('./routes/Plugins'))
fastify.get('/download/:name', require('./routes/Download'))

fastify.listen({ port: process.env.PORT ?? 3000 }, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})