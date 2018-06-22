var html = require('choo/html')

const MINUTE = 60 * 1000
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

module.exports = post

function post (p) {
  return html`
    <article>
      <a href=${p.url}>${p.title}</a>
      <p class="muted">submitted ${timeSince(p.timestamp)}</p>
      <hr>
    </article>`
}

function timeSince (timestamp) {
  var timeSince = Date.now() - timestamp

  if (timeSince < MINUTE) {
    return `a few seconds ago`
  }

  if (timeSince < HOUR) {
    var minutes = (timeSince / MINUTE).toFixed(0)

    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  }

  if (timeSince < DAY) {
    var hours = (timeSince / HOUR).toFixed(0)

    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  }

  var days = (timeSince / DAY).toFixed(0)

  return `${days} day${hours > 1 ? 's' : ''} ago`
}
