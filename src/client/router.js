var layout = require('./layout')
var main = require('./views/main.view')
var submit = require('./views/submit.view')
var comments = require('./views/comments.view')

module.exports = router

function router (state, emitter, app) {
  app.route('/', layout(main))
  app.route('/submit', layout(submit))
  app.route('/posts/:postId/comments', layout(comments))
}
