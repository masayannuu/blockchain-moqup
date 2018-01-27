'use strict'
const SHA256 = require('crypto-js/SHA256')
const toHashString = require('./toHashString')

module.exports = (input, output) => {
  return SHA256(toHashString(input) + toHashString(output)).toString()
}
