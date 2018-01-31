'use strict'
const Transaction = require('../../lib/entity/Transaction.js')
const CoinbaseTransactionInput = require('../../lib/entity/CoinbaseTransactionInput.js')
const TransactionOutput = require('../../lib/entity/TransactionOutput.js')
const calculateHashForTx = require('./calculateHashForTx.js')

module.exports = (address, data) => {
  const reward_value = 0.25
  const input = [new CoinbaseTransactionInput(data)]
  //TODO: create scriptSig object for signature
  const output = [new TransactionOutput(reward_value, 0, address)]
  return new Transaction(input, output, calculateHashForTx(input, output))
}
