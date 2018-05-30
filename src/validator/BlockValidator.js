'use strict'
const invalidBlockHash = require('./invalidBlockHash')
const invalidIndex = require('./invalidIndex')
const invalidPreviousHash = require('./invalidPreviousHash')

class BlockValidator {
  constructor () {
    this.valid = false
    this.messages = []
  }

  validate (new_block, previous_block) {
    this.messages.push(invalidIndex(new_block, previous_block))
    this.messages.push(invalidPreviousHash(new_block, previous_block))
    this.messages.push(invalidBlockHash(new_block))
    this.valid = (this.messages.filter(Boolean).length == 0)
  }
}
module.exports = BlockValidator
