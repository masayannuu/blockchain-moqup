'use strict'
const assert = require('assert')
const TransactionInput = require('../../../lib/entities/TransactionInput.js')

describe(TransactionInput.name, () => {
  describe('constructor', () => {
    it('set properties', () => {
      const input = new TransactionInput();
      assert.deepEquals(input.transactionHash, '');
      assert.deepEquals(input.index, 1);
      assert.deepEquals(input.scriptSig, []);
    })
  })
})
