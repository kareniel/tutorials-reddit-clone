require('dotenv').config({
  path: '.env.development'
})

var budo = require('budo')
var envify = require('envify')

const PORT = 8080

budo('src/client:bundle.js', {
  live: true,
  pushstate: true,
  port: PORT,
  dir: 'public',
  browserify: {
    transform: envify
  }
}).on('connect', e => {
  console.log('reddit-clone-client is listening on port', PORT)
})
