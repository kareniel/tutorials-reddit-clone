var Component = require('choo/component')
var html = require('choo/html')

module.exports = class SubmitForm extends Component {
  constructor (name, state, emit) {
    super()
    this.state = state
    this.emit = emit
  }

  update () {
    return false
  }

  createElement () {
    return html`
      <form>
        <label>URL</label>
        <input type="text">

        <label>Title</label>
        <input type="text">
      </form>`
  }
}
