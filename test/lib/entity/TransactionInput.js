'use strict'
const assert = require('assert')
const TransactionInput = require('../../../lib/entity/TransactionInput.js')
const SHA256 = require('crypto-js/SHA256')

describe(TransactionInput.name, () => {
  describe('constructor', () => {
    it('set properties', () => {
      const hash = SHA256('sample').toString()
      const input = new TransactionInput(hash, 1, [])
      assert.deepEqual(input.transactionHash, hash)
      assert.deepEqual(input.outputIndex, 1)
      assert.deepEqual(input.scriptSignature, [])
    })
  })
})
