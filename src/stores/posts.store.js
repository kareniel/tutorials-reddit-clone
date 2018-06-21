module.exports = posts

function posts (state, emitter) {
  state.posts = {
    list: []
  }

  emitter.on('DOMContentLoaded', function () {
    emitter.on('posts:submit', submit)
    emitter.on('posts:upvote', upvote)
    emitter.on('posts:downvote', downvote)
  })

  function submit (post) {
    post.timestamp = Date.now()

    state.posts.list.push(post)
    emitter.emit(state.events.PUSHSTATE, '/')
  }

  function upvote () {

  }

  function downvote () {

  }
}
