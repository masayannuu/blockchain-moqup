'use strict'

class Block {
  constructor (index, transactions, previousHash, timestamp, hash, nonce) {
    this.index = index;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.hash = hash;
    this.nonce = nonce;
  }
}

module.exports = Block;
