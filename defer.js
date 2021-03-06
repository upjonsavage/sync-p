var Promise = require('./index')
module.exports = function deferred () {
  var _resolve, _reject
  var _promise = Promise(function (resolve, reject) {
    _resolve = resolve
    _reject = reject
  })
  return {
    promise: _promise,
    resolve: _resolve,
    reject: _reject
  }
}
