var choo = require('choo')

var app = choo()

app.use(require('./router'))
app.use(require('./stores/app.store'))
app.use(require('./stores/posts.store'))

app.mount('body')
