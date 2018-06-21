var choo = require('choo')

var app = choo()

app.use(require('./router'))
app.use(require('./stores/app.store'))

app.mount('body')
