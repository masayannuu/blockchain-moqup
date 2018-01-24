'use strict'

class Transaction {
  constructor (inputs, outputs, transaction_hash) {
    this.inputs = inputs
    this.outputs = outputs
    this.transactionHash = transaction_hash
  }
}

module.exports = Transaction
