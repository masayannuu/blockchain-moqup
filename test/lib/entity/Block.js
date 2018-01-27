'use strict'
const assert = require('assert');
const Block = require('../../../lib/entity/Block.js')
const calculateHash = require('../../../src/util/index.js').calculateHash

describe(Block.name, () => {
  describe('constructor', () => {
    it('set properties', ()=>{
      const index = 1
      const transactions = []
      const previous_hash = ''
      const timestamp = new Date().getTime() / 1000
      const hash = calculateHash(index, transactions, previous_hash, timestamp)
      const nonce = 0
      const block = new Block(index, transactions, previous_hash, timestamp, hash, nonce)
      assert.deepEqual(block.index, index)
      assert.deepEqual(block.transactions, transactions)
      assert.deepEqual(block.previousHash, previous_hash)
      assert.deepEqual(block.timestamp, timestamp)
      assert.deepEqual(block.hash, hash)
      assert.deepEqual(block.nonce, nonce)
    })
  })
})
