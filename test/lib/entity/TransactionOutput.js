'use strict'
const assert = require('assert')
const TransactionOutput = require('../../../lib/entity/TransactionOutput.js')

describe(TransactionOutput.name, () => {
  describe('constructor', () => {
    it('set properties', () => {
      const output = new TransactionOutput(0.05, 1, [])
      assert.deepEqual(output.value, 0.05)
      assert.deepEqual(output.index, 1)
      assert.deepEqual(output.scriptPublicKey, [])
    })
  })
})
