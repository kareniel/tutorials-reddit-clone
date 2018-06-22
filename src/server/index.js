var http = require('http')
var fse = require('fs-extra')
var pkg = require('../../package.json')

const { PORT } = process.env
const { name, version } = pkg
const lastUpdatedOn = fse.statSync(__dirname).mtime

const message = `
${name} ${version}
${formatDate(lastUpdatedOn)}`

var server = http.createServer(handler)

server.listen(PORT, err => {
  if (err) return console.log('Uh oh.', '\n\n', err)

  process.title = 'reddit-clone'

  console.log(process.title, `is listening at ${PORT}`)
})

function handler (req, res) {
  res.end(message)
}

function formatDate (date) {
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}
