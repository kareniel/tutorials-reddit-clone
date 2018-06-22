var http = require('http')
var routes = require('./routes')

const { PORT } = process.env

var server = http.createServer(handleRequest)

server.listen(PORT, err => {
  if (err) return console.log('Uh oh.', '\n\n', err)

  process.title = 'reddit-clone-server'

  console.log(process.title, `is listening at ${PORT}`)
})

function handleRequest (req, res) {
  var { method, url } = req

  getRouteHandler(method, url, handler => {
    bodyParser(req, res, err => {
      if (err) return

      handler(req, res)
    })
  })
}

function getRouteHandler (method, url, callback) {
  if (url === '/posts') {
    if (method === 'POST') return callback(routes.posts.create)
    if (method === 'GET') return callback(routes.posts.list)
  }

  callback(routes.default)
}

function bodyParser (req, res, next) {
  if (req.headers['content-type'] !== 'application/json') return next()

  var chunks = []

  req.on('data', chunk => {
    chunks.push(chunk)
  })

  req.on('end', () => {
    var str = Buffer.concat(chunks).toString()

    try {
      req.body = JSON.parse(str)
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({
        type: 'invalid_json',
        message: 'JSON body could not be parsed.'
      }))

      return false
    }

    next()
  })
}
