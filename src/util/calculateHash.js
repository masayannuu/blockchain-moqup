'use strict'
const SHA256 = require('crypto-js/SHA256')

const toHashString = (object) => {
  return JSON.stringify(object, Object.keys(object).sort())
}

const calculateHash = (input, output) => {
  return SHA256(toHashString(input) + toHashString(output)).toString()
}

module.exports = calculateHash
