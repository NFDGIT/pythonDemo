#!/usr/bin/python3

import blockchain

block = blockchain.Blockchain()
print(block.chain,end = "\n")

block.new_transaction('123456789','567891234',123456)

block.new_block(22)

print(block.chain)

print(block.chain,end='\n')
block.new_block(proof = block.proof_of_work(block.last_block['proof']))
print(block.chain,end='\n')





