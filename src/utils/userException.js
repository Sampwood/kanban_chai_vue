export default class UserException {
  constructor (message, name) {
    this.message = message
    this.name = name || 'UserException'
  }
}
