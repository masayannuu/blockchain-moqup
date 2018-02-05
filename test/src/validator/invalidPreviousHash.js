'use strict'
const invalidPreviousHash = require('../../../src/validator/invalidPreviousHash')
const calculateHashForBlock = require('../../../src/util/calculateHashForBlock.js')
const calculateHash = require('../../../src/util/calculateHash.js')
const SHA256 = require('crypto-js/SHA256')
const Block = require('../../../lib/entity/Block.js')

describe('invalidPreviousHash', () => {
  context('when valid', () => {
    it('return empty string', () => {
      const hash = calculateHash(1, 'data', SHA256('sample').toString(), 1517062919.271)
      const block = new Block(2, 'data2', SHA256('sample2').toString(), 1517062919.271, hash, 0)
      const block_hash = calculateHashForBlock(block)
      //TODO ブロックチェーンを生成，newBlockを生成，判定にかける．
    })
  })
})
