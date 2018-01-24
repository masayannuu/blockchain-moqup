'use strict'
const assert = require('assert')
const calculateHash = require('../../../src/util/calculateHash.js')
const TransactionInput = require('../../../lib/entity/TransactionInput.js')
const TransactionOutput = require('../../../lib/entity/TransactionOutput.js')

describe(calculateHash.name, () => {
  it('return hash string', () => {
    const input = new TransactionInput()
    const output = new TransactionOutput()
    calculateHash(input, output)
    //assert?
  })
})
