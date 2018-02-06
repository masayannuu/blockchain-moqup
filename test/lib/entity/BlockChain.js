'use strict'
const assert = require('assert');
const BlockChain = require('../../../lib/entity/BlockChain.js')
const Block = require('../../../lib/entity/Block.js')
const calculateHash = require('../../../src/util/index.js').calculateHash

describe(BlockChain.name, () => {
  const index = 1
  const transactions = []
  const previous_hash = ''
  const timestamp = new Date().getTime() / 1000
  const hash = calculateHash(index, transactions, previous_hash, timestamp)
  const nonce = 0
  const block = new Block(index, transactions, previous_hash, timestamp, hash, nonce)
  const block_chain = new BlockChain(block)

  describe('constructor', () => {
    it('set properties', ()=>{
      assert.deepEqual(block_chain.chain, [block])
    })
  })

  describe('get latestBlock', () => {
    it('return the latest object of the array of chain', () => {
      assert.deepEqual(block_chain.latestBlock, block)
    })
  })

  describe('createNextBlock', () => {
    it('return Block object', () => {
      const new_block = block_chain.createNextBlock(transactions)
      assert.deepEqual(new_block.previousHash, hash)
    })
  })
})
