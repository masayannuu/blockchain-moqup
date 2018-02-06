'use strict'
const assert = require('assert')
const invalidPreviousHash = require('../../../src/validator/invalidPreviousHash')
const calculatehashforblock = require('../../../src/util/calculatehashforblock.js')
const getGenesisBlock = require('../../../src/util/getGenesisBlock.js')
const calculateHash = require('../../../src/util/calculateHash.js')
const SHA256 = require('crypto-js/SHA256')
const Block = require('../../../lib/entity/Block.js')
const BlockChain = require('../../../lib/entity/BlockChain.js')

describe('invalidPreviousHash', () => {
  context('when valid', () => {
    it('return empty string', () => {
      const hash = calculateHash(1, 'data', SHA256('sample').toString(), 1517062919.271)
      const block = new Block(2, 'data2', SHA256('sample2').toString(), 1517062919.271, hash, 0)
      const genesis_block = getGenesisBlock()
      const block_chain = new BlockChain([genesis_block])
      const message = invalidPreviousHash(block_chain.latestBlock, block_chain.latestBlock)
      assert.deepEqual(message, '')
    })
  })
})
