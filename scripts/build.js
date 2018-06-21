var fs = require('fs')
var mkdirp = require('mkdirp')
var cp = require('cp')
var browserify = require('browserify')

mkdirp.sync('dist')

cp.sync('public/index.html', 'dist/index.html')
cp.sync('public/style.css', 'dist/style.css')

browserify()
  .add('src/index.js')
  .bundle()
  .pipe(fs.createWriteStream('dist/bundle.js'))
