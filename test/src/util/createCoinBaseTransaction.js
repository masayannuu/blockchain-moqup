'use strict'
const assert = require('assert')
const createCoinBaseTransaction = require('../../../src/util/createCoinBaseTransaction')

describe('createCoinBaseTransaction', () => {
  it('return coinbaseTransaction', () => {
    const coinbase = createCoinBaseTransaction()
  })
})
