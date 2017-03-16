function receivesAFunction(callback) {
  return callback()
}

function returnsANamedFunction(callback) {
  return callback
}

function returnsAnAnonymousFunction() {
  return (() => {})
}
