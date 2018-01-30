'use strict'
const assert = require('assert')
const Transaction = require('../../../lib/entity/Transaction.js')
const TransactionInput = require('../../../lib/entity/TransactionInput.js')
const TransactionOutput = require('../../../lib/entity/TransactionOutput.js')

describe(Transaction.name, () => {
  describe('constructor', () => {
    it('set properties', () => {
      const input = [new TransactionInput()]
      const output = [new TransactionOutput(0.05, 1, [])]
      const transaction_hash = ''
      const transaction = new Transaction(input, output, transaction_hash)
      assert.deepEqual(transaction.inputs, input)
      assert.deepEqual(transaction.outputs, output)
      assert.deepEqual(transaction.transactionHash, transaction_hash)
    })
  })
})
