var fse = require('fs-extra')
var pkg = require('../../package.json')

const { name, version } = pkg
const lastUpdatedOn = fse.statSync(__dirname).mtime

const message = `
${name} ${version}
${formatDate(lastUpdatedOn)}`

var posts = []

module.exports = {
  default: defaultRoute,
  posts: {
    create: createPost,
    list: listPosts
  }
}

function defaultRoute (req, res) {
  res.end(message)
}

function createPost (req, res) {
  if (!req.body.title || !req.body.url) {
    res.writeHead(400)
    res.end('Post must have a title and an URL')

    return false
  }

  posts.push(req.body)

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(req.body))
}

function listPosts (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })

  res.end(JSON.stringify(posts))
}

function formatDate (date) {
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}
