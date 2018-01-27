'use strict'

class TransactionOutput {
  constructor(value, index, script_public_key) {
    this.value = value
    this.index = index
    this.scriptPublicKey = script_public_key
  }
}
module.exports = TransactionOutput
