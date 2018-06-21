module.exports = class Model {
  constructor () {
    this.value = ''
    this.update = this.update.bind(this)
  }

  update (e) {
    this.value = e.target.value
  }
}
