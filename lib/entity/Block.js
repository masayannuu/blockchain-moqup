'use strict'

class Block {

  /**
   * Block Object
   *
   * @param index {number} block's index also called height
   * @param transactions {Tsansaction[]} transactions array. a transaction has inputs and outpus
   * @param previousHash {string} the value of the previous block
   * @param timestamp {number} unix standard date & time when block generate
   * @param hash {string} hash value of the block itself
   * @param nonce {number} number used onece. random numbers
   */
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
