'use strict'
const assert = require('assert')
const Transaction = require('../../../lib/entity/Transaction')
const createCoinbaseTransaction = require('../../../src/util/createCoinbaseTransaction')
const TransactionOutput = require('../../../lib/entity/TransactionOutput')
const calculateHashForTx = require('../../../src/util/calculateHashForTx')
const getGenesisBlock = require('../../../src/util/getGenesisBlock')

describe('getGenesisBlock', () => {
  it('return genesisBlock', () => {
    const address = '62e907b15cbf27d5425399ebf6f0fb50ebb88f18'
    const genesis_data = 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'
    const input = [createCoinbaseTransaction(address, genesis_data)]
    const output = [new TransactionOutput(0.05, 1, [])]
    const transaction_hash = calculateHashForTx(input, output)
    const transaction = new Transaction(input, output, transaction_hash)
    const genesis_block = getGenesisBlock()
    assert.ok(genesis_block)
    assert.deepEqual(genesis_block.index, 0)
    assert.deepEqual(genesis_block.transactions, [transaction])
    assert.deepEqual(genesis_block.previousHash, 0)
    assert.deepEqual(genesis_block.timestamp, 1230908400)
  })
})
