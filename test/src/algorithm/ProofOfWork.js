'use strict'
const assert = require('assert')
const ProofOfWork = require('../../../src/algorithm/ProofOfWork.js')
const SHA256 = require('crypto-js/SHA256')

describe('ProofOfWork', () => {
  const transactions = ['sample data']
  const timestamp = new Date().getTime() / 1000
  const previous_hash = SHA256('previous_hash').toString()
  const pow = new ProofOfWork(transactions, timestamp, previous_hash)

  describe('constructor', () => {
    it('set properties', () => {
      assert.deepEqual(pow.transactions, transactions)
      assert.deepEqual(pow.timestamp, timestamp)
      assert.deepEqual(pow.previousHash, previous_hash)
    })
  })

  describe('get maxCount', () => {
    it('return count integer', () => {
      assert.deepEqual(pow.maxCount, 10)
    })
  })

  describe('calculate', () => {
    it('return nonce and hash', () => {
      const calculate_result = pow.calculate(1)
      assert(Array.isArray(calculate_result))
      assert.deepEqual(calculate_result.length, 2)
    })
  })
})
