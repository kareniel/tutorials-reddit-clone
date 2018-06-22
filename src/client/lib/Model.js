var Component = require('choo/component')
const NO_COMPONENT = 'Model constructor expects a Component as first argument.'

module.exports = class Model {
  constructor (component, opts) {
    if (!component || !(component instanceof Component)) {
      throw new Error(NO_COMPONENT)
    }

    this.component = component
    this.opts = opts
    this.value = ''

    this.update = this.update.bind(this)
  }

  update (e) {
    this.value = e.target.value

    this.component.rerender()
  }

  reset () {
    this.value = ''
  }
}
