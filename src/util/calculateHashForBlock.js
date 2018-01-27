'use strict'
const calculateHash = require('./calculateHash.js')

module.exports = (block) => {
  return calculateHash(block.index, block.transaction, block.previousTransaction, block.timestamp)
}
