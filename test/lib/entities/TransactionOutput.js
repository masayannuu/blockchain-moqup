'use strict'
const assert = require('assert')
const TransactionOutput = require('../../../lib/entities/TransactionOutput.js')

describe(TransactionOutput.name, () => {
  describe('constructor', () => {
    it('set properties', () => {
      const output = new TransactionOutput(0.05, 1);
      assert.deepEquals(output.value, 0.05);
      assert.deepEquals(output.index, 1);
      assert.deepEquals(output.scriptPublicKey, []);
    })
  })
})
