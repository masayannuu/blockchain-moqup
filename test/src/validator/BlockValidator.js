'use srtict'
const BlockValidator = require('../../../src/validator/BlockValidator')
const assert = require('assert')
const invalidPreviousHash = require('../../../src/validator/invalidPreviousHash')
const calculatehashforblock = require('../../../src/util/calculatehashforblock.js')
const getGenesisBlock = require('../../../src/util/getGenesisBlock.js')
const calculateHash = require('../../../src/util/calculateHash.js')
const SHA256 = require('crypto-js/SHA256')
const Block = require('../../../lib/entity/Block.js')
const BlockChain = require('../../../lib/entity/BlockChain.js')

describe(BlockValidator.name, () => {
  const validator = new BlockValidator();

  describe('constructor', () => {
    it('set properities', () => {
      assert.deepEqual(validator.valid, false)
    })
  })

  describe('validate', () => {
    context('when args is valid', () => {
      describe('return true', () => {
        const genesis_block = getGenesisBlock()
        const block_chain = new BlockChain([genesis_block])
        const hash = calculateHash(1, 'data', SHA256('sample').toString(), 1517062919.271)
        const block = new Block(2, 'data2', SHA256('sample2').toString(), 1517062919.271, hash, 0)
        validator.validate(block_chain.latestBlock, block)
        assert.deepEqual(validator.messages, [])
      })
    })
  })
})
