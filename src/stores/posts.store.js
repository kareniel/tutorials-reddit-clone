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

  function submit () {

  }

  function upvote () {

  }

  function downvote () {

  }
}
