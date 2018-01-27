'use strict'
const assert = require('assert')
const calculateHashForTx = require('../../../src/util/calculateHashForTx.js')
const SHA256 = require('crypto-js/SHA256')
const TransactionInput = require('../../../lib/entity/TransactionInput.js')
const TransactionOutput = require('../../../lib/entity/TransactionOutput.js')

describe('calculateHashForTx', () => {
  it('return hash string', () => {
    const input = new TransactionInput(SHA256('txout').toString, 1, [])
    const output = new TransactionOutput(['data'], 1, [])
    const transaction_hash = calculateHashForTx(input, output)
    assert.deepEqual(transaction_hash, '096506bdcf424947cbe1770cb8c1179e1cd9ff95a0c45f3df2028675a6a855b6')
  })
})
