'use strict'
const calculateHashForBlock = require('../util/calculateHashForBlock')

module.exports = (newBlock) => {
  return (calculateHashForBlock(newBlock) === newBlock.hash) ? '' : `block hash is invalid: ${calculateHashForBlock(newBlock)} | ${newBlock.hash}`
}
