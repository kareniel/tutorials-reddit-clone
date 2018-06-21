var Component = require('choo/component')
var html = require('choo/html')
var Model = require('../lib/Model')

module.exports = class SubmitForm extends Component {
  constructor (name, state, emit) {
    super()

    this.state = state
    this.emit = emit

    this.fields = {
      url: new Model(),
      title: new Model()
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  update () {
    return false
  }

  createElement () {
    return html`
      <form>
        <p>
          <label>URL</label><input type="text" onkeyup=${this.fields.url.update}>
        </p>
        <p>
          <label>Title</label><input type="text" onkeyup=${this.fields.title.update}>
        </p>
        <button onclick=${this.onSubmit}>Submit</button>
      </form>`
  }

  onSubmit (e) {
    e.preventDefault()

    this.emit('posts:submit', {
      url: this.fields.url.value,
      title: this.fields.title.value
    })
  }
}
