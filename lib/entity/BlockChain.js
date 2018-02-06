'use strict'
const ProofOfWork = require('../../src/algorithm/ProofOfWork')
const Block = require('./Block')

class BlockChain {
  constructor (genesis_block) {
    this.chain = [genesis_block]
  }

  get latestBlock () {
    return this.chain[this.chain.length - 1]
  }

  get nextIndex () {
    return this.latestBlock.index + 1
  }

  createNextBlock (transactions) {
    const timestamp = new Date().getTime() / 1000
    const pow = new ProofOfWork(transactions, timestamp, this.latestBlock)
    const [hash, nonce] = pow.calculate(1)
    return new Block(this.nextIndex, transactions, this.latestBlock.hash, timestamp, hash, nonce)
  }
}
module.exports = BlockChain;
