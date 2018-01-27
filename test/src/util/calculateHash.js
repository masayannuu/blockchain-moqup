'use strict'
const assert = require('assert')
const calculateHash = require('../../../src/util/calculateHash.js')
const SHA256 = require('crypto-js/SHA256')

describe('calculateHash', () => {
  it('return hash string', () => {
    const hash = calculateHash(1, 'data', SHA256('sample').toString(), 1517062919.271)
    assert.deepEqual(hash, 'cb256916f8c46aa6e8358232e6914a3c192762e2eca8d150bd6c8554705aacbd')
  })
})
