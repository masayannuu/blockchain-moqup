'use srtict'

module.exports = (newBlock, previousBlock) => {
  return (newBlock.hash === previousBlock.hash) ? '' : 'previous hash is invalid'
}
