'use strict'
const assert = require('assert')
const Transaction = require('../../../lib/entities/Transaction.js')
const TransactionInput = require('../../../lib/entities/TransactionInput.js')
const TransactionOutput = require('../../../lib/entities/TransactionOutput.js')

describe(Transaction.name, () => {
  describe('constructor', () => {
    it('set properties', () => {
      const input = new TransactionInput();
      const output = new TransactionOutput(0.05, 1, []);
      const transaction = new Transaction(1, input, 1, output);
      assert.deepEquals(transaction.inputCounter, '');
      assert.deepEquals(transaction.inputs, []);
      assert.deepEquals(transaction.outpuCounter, '');
      assert.deepEquals(transaction.outputs, []);
    })
  })
})
