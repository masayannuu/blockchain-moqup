'use strict'

class Block {
  constructor(index, previousHash, timestamp, data, hash, nonce) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.hash = hash;
    this.nonce = nonce;
  }
}

module.exports = Block;
