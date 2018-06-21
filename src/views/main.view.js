var html = require('choo/html')
var post = require('./post.view')

module.exports = mainView

function mainView (state, emit) {
  return html`
    <section>
      ${state.posts.list.map(post)}
    </section>`
}
