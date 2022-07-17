module.exports = function Home(request, reply) {
  reply.send(
    `
    GET /                      Shows this page.
    GET /plugins               Lists all plugins avalible.
    GET /download/:name        Returns the link to the plugin download.
  `
  )
}