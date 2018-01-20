'use strict'

class Transaction {
  constructor (inputs, outputs, locktime) {
    this.inputsCounter = inputs.length;
    this.inputs = inputs;
    this.outputsCounter = outputs.length;
    this.outputs = outputs;
    this.locktime = locktime;
  }
}

module.exports = Transaction;
