'use strict'
const Block = require('../../lib/entity/Block')
const Transaction = require('../../lib/entity/Transaction')
const createCoinbaseTransaction = require('./createCoinbaseTransaction')
const TransactionOutput = require('../../lib/entity/TransactionOutput')
const calculateHashForTx = require('./calculateHashForTx')
const ProofOfWork = require('../algorithm/ProofOfWork')

module.exports = () => {
  const address = '62e907b15cbf27d5425399ebf6f0fb50ebb88f18'
  const genesis_data = 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'
  const input = [createCoinbaseTransaction(address, genesis_data)]
  const output = [new TransactionOutput(0.05, 1, [])]
  const transaction_hash = calculateHashForTx(input, output)
  const transaction = new Transaction(input, output, transaction_hash)
  const [nonce, hash] = new ProofOfWork([transaction], new Date().getTime() / 1000, '0').calculate(0)
  return new Block(0, [transaction], '0', 1230908400, hash, nonce)
}
