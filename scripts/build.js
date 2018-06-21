var fse = require('fs-extra')
var browserify = require('browserify')

fse.mkdirpSync('dist')
fse.copySync('public/', 'dist/')

browserify()
  .add('src/index.js')
  .bundle()
  .pipe(fse.createWriteStream('dist/bundle.js'))
