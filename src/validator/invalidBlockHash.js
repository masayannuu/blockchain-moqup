'use strict'
const calculateHashForBlock = require('../util/calculateHashForBlock')

module.exports = (newBlock) => {
  (calculateHashForBlock(newBlock) === newBlock.hash) ? '' : `block hash is invalid: ${calculateHashForBlock(newBlock)} | ${newBlock.hash}`
}
