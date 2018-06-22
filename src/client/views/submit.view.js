var html = require('choo/html')
var SubmitForm = require('../components/SubmitForm')

module.exports = submitView

function submitView (state, emit, components) {
  return html`
    <section>
      ${state.cache(SubmitForm, 'SubmitForm').render()}
    </section>`
}
