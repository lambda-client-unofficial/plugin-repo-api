module.exports = async (request, reply) => {
  return `
    GET /                      Shows this page.
    GET /plugins               Lists all plugins avalible.
    GET /download/:name        Returns the link to the plugin download.
  `
}