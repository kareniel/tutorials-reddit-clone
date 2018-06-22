module.exports = posts

function posts (state, emitter) {
  state.posts = {
    list: [{
      title: 'The Kimura | A Shift in Perspective | ROYDEAN.TV',
      url: 'https://www.youtube.com/watch?v=-OoSucz81BM',
      timestamp: Date.now()
    }, {
      title: 'Brazilian Jiu Jitsu | The Overhook Series | Norway Seminar | ROYDEAN.TV',
      url: 'https://www.youtube.com/watch?v=quE6vJ33hPk',
      timestamp: 1529623184316
    }, {
      title: 'Eddie Bravo explains the Rubber Guard to Rickson Gracie',
      url: 'https://www.youtube.com/watch?v=S8Ccl5jY9do',
      timestamp: 1520599784316
    }]
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
