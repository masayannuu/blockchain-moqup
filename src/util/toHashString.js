'use strict'

module.exports = (object) => {
  return JSON.stringify(object, Object.keys(object).sort())
}
