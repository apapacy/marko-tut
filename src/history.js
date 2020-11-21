const { createBrowserHistory } = require('history')
const parse = require('url-parse')
const deepEqual = require('deep-equal')
const isNode = new Function('try {return !!process.env;}catch(e){return false;}') //eslint-disable-line
let history

if (!isNode()) {
  console.log('client++++++++++++++++++')
  history = createBrowserHistory()
  history.navigate = function (path, state) {
    const parsedPath = parse(path)
    const location = history.location
    if (parsedPath.pathname === location.pathname &&
      parsedPath.query === location.search &&
      parsedPath.hash === location.hash &&
      deepEqual(state, location.state)) {
      return
    }
    const args = Array.from(arguments)
    args.splice(0, 2)
    return history.push(...[path, state, ...args])
  }
} else {
  console.log('server---------------------------')
  history = {}
  history.navigate = function () {}
  history.listen = function () {}
}

module.exports = history
