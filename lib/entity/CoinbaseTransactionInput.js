'use strict'

class CoinbaseTransactionInput {
  constructor(coinbase_data) {
    this.transactionHash = 0
    this.outputIndex = 1
    this.coinbaseData = coinbase_data
  }
}

module.exports = CoinbaseTransactionInput
