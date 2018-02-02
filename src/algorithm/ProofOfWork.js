'use strict'
const SHA256 = require('crypto-js/SHA256')
const toHashString = require('../util/toHashString')

/**
 * Simple Proof Of Work.
 */
class ProofOfWork {
  constructor (transactions, timestamp, previous_hash) {
    this.transactions = transactions
    this.timestamp = timestamp
    this.previousHash = previous_hash
  }

  get maxCount () {
    return 10
  }

  calculate (difficulty_bit) {
    const target = this.getDifficulty(difficulty_bit)
    let result = []
    for (const nonce of [...Array(this.maxCount).keys()]) {
      const hash_result = SHA256(toHashString(this.transactions) + toHashString(this.timestamp) + this.previousHash + nonce.toString()).toString()
      if (parseInt(hash_result, 16) < target) {
        console.log(`Success with nonce: ${nonce}`)
        result.push(hash_result, nonce)
        break
      }
    }
    return result
  }

  getDifficulty (difficulty_bit) {
    return 2 ** (256-difficulty_bit)
  }
}
module.exports = ProofOfWork
