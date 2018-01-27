'use strict'
const SHA256 = require('crypto-js/SHA256')

module.exports = (index, transactions, previous_hash, timestamp) => {
  return SHA256(index + transactions + previous_hash + timestamp).toString()
}
