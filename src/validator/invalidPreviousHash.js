'use srtict'

module.exports = (newBlock, previousBlock) => {
  (previousBlock.hash === newBlock.hash) ? '' : 'previous hash is invalid'
}
