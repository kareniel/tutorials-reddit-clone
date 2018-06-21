var mainView = require('./views/main.view')

module.exports = router

function router (state, emitter, app) {
  app.route('/', mainView)
}
