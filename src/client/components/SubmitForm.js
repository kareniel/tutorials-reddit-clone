var Component = require('choo/component')
var html = require('choo/html')
var Model = require('../lib/Model')

const URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/ // eslint-disable-line

module.exports = class SubmitForm extends Component {
  constructor (name, state, emit) {
    super()

    this.state = state
    this.emit = emit

    this.disabled = true
    this.fields = {
      url: new Model(this),
      title: new Model(this)
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  validURL (str) {
    return str.match(URL_REGEX)
  }

  update () {
    return false
  }

  createElement () {
    this.disabled = (
      !this.fields.url.value ||
      !this.validURL(this.fields.url.value) ||
      !this.fields.title.value
    )

    return html`
      <form class="submit-form">
        <p>
          <label>URL</label><br>
          <input type="url"
            value=${this.fields.url.value} 
            onkeyup=${this.fields.url.update}>
        </p>
        <p>
          <label>Title</label><br>
          <input type="text" 
            value=${this.fields.title.value} 
            onkeyup=${this.fields.title.update}>
        </p>
        <button disabled=${this.disabled} class="button" onclick=${this.onSubmit}>
          Submit
        </button>
      </form>`
  }

  clear () {
    Object.keys(this.fields).forEach(key => {
      this.fields[key].reset()
    })
  }

  onSubmit (e) {
    e.preventDefault()

    this.emit('posts:submit', {
      url: this.fields.url.value,
      title: this.fields.title.value
    })

    this.clear()
  }
}
