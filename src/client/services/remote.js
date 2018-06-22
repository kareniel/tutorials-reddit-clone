var request = require('request')

const { API_URL } = process.env

module.exports = {
  posts: {
    create: createPost,
    list: listPosts
  }
}

function createPost (post, cb) {
  var opts = {
    method: 'POST',
    url: API_URL + '/posts',
    json: true,
    body: post
  }

  request(opts, cb)
}

function listPosts (cb) {
  var opts = {
    method: 'GET',
    url: API_URL + '/posts',
    json: true
  }

  request(opts, cb)
}
