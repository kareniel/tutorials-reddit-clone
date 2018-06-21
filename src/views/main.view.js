var html = require('choo/html')

module.exports = mainView

function mainView () {
  return html`
    <main>
      <a href="/submit">Submit a new link</a>
    </main>`
}
