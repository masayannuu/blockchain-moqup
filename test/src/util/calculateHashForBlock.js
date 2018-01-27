'use strict'
const assert = require('assert')
const calculateHashForBlock = require('../../../src/util/calculateHashForBlock.js')
const calculateHash = require('../../../src/util/calculateHash.js')
const SHA256 = require('crypto-js/SHA256')
const Block = require('../../../lib/entity/Block.js')

describe('calculateHashForBlock', () => {
  it('return hash string', () => {
    const hash = calculateHash(1, 'data', SHA256('sample').toString(), 1517062919.271)
    const block = new Block(2, 'data2', SHA256('sample2').toString(), 1517062919.271, hash, 0)
    const block_hash = calculateHashForBlock(block)
    assert.deepEqual(block_hash, 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855')
  })
})
