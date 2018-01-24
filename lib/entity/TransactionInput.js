'use strict'

class TransactionInput {
  constructor(transaction_hash, output_index, script_signature) {
    this.transactionHash = transaction_hash
    this.outputIndex = output_index
    this.scriptSignature = script_signature
  }
}

module.exports = TransactionInput
