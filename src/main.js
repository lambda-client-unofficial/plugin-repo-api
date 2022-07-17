const fastify = require('fastify')({ logger: true })

fastify.get('/', require('./routes/Home'))
fastify.get('/plugins', require('./routes/Plugins'))
fastify.get('/download/:name', require('./routes/Download'))

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT ?? 3000, host: process.env.HOST ?? '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
