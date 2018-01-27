'use strict'
const calculateHash = require('./calculateHash.js')
const calculateHashForTx = require('./calculateHashForTx.js')
const calculateHashForBlock = require('./calculateHashForBlock.js')

module.exports = {
  calculateHash: calculateHash,
  calculateHashForTx: calculateHashForTx,
  calculateHashForBlock: calculateHashForBlock,
}
