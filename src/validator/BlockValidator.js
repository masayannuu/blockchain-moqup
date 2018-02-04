'use strict'
const invalidBlockHash = require('./invalidBlockHash')
const invalidIndex = require('invalidIndex')
const invalidPreviousHash = require('invalidPreviousHash')

class BlockValiadtor {
  construct () {
    this.valid = false
    this.messages = []
  }

  async validate (new_block, previous_block) {
    this.messages.push(invalidIndex(new_block, previous_block))
    this.messages.push(invalidPreviousHash(new_block, previous_block))
    this.messages.push(onvalidBlockHash(new_block))
    this.valid = (this.messages.fillter(Boolean).length == 0)
  }

  get valid () {
    return this.valid
  }

  get errors () {
    return this.messages
  }
}
module.exports = Validator
