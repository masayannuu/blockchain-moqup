'use srtict'

module.exports = (newBlock, previousBlock) => {
  return (newBlock.index + 1 === previousBlock.index) ? '' : 'block index is invalid'
}
