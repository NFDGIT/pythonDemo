#!/usr/bin/python3

import blockchain

block = blockchain.Blockchain()
print(block.chain,end = "\n")


block.new_transaction('123456789','567891234',123456)

block.new_block(22)

print(block.chain)

