const fastify = require('fastify')({logger: true})

fastify.get('/', require('./routes/Home'))
fastify.get('/plugins', require('./routes/Plugins'))
fastify.get('/download/:name', require('./routes/Download'))

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT ?? 3000, host: process.env.HOST ?? '127.0.0.1' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
