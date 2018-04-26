#!/usr/bin/python3
import blockchain
import json

from uuid import uuid4
from flask import Flask

# isinstance our node
app = Flask(__name__)

indentifier = str(uuid4()).replace("-","")

blockchain =  blockchain.Blockchain()


# 挖矿
@app.route('/mine',methods = ['GET'])
def mine():
   nextProof = blockchain.proof_of_work(blockchain.last_block["proof"])
   
   blockchain.new_transaction(sender="0",recipient=indentifier,amount=1)

   blockchain.new_block(nextProof)
   return json.dumps(blockchain.chain)







# 交易
@app.route('/transactions/new',methods = ["POST"])
def new_transaction():
   pass


# 获取整个区块链数据
@app.route('/chain',methods = ["POST"])
def chain():
   return json.dumps(blockchain.chain)

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000)

