const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })
  server.route(routes)

  await server.start()
  console.log(`server berjalan pada ${server.info.uri}`)
}

init()
// http://notesapp-v1.dicodingacademy.com/
// belajar git
// https://www.dicoding.com/academies/317#course-information
