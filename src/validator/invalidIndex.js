'use srtict'

module.exports = (newBlock, previousBlock) => {
  (previousBlock.index + 1 === newBlock.index) ? '' : 'block index is invalid'
}
