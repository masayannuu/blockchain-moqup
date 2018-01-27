'use strict'

class BlockChain {
  constructor (genesis_block) {
    this.chain = [genesis_block]
  }

  get latestBlock () {
    return this.chain[this.chain.length - 1]
  }
}

module.exports = BlockChain;
