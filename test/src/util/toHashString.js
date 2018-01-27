'use strict'
const assert = require('assert')
const toHashString = require('../../../src/util/toHashString.js')

describe('toHashString', () => {
  it('return hash string', () => {
    const object = {'hoge': 'data'}
    const hash_string = toHashString(object)
    assert.deepEqual(hash_string, '{"hoge":"data"}')
  })
})
