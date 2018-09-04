# -*- coding: utf-8 -*

from python import blockchain




import json
import os
from flask import send_from_directory

from uuid import uuid4
from flask import Flask,jsonify,request

# isinstance our node  #!/usr/bin/python3
# app = Flask(__name__)

app = Flask(__name__, static_url_path='')

indentifier = str(uuid4()).replace("-","")

blockchain =  blockchain.Blockchain()




@app.route('/getName',methods=['GET'])
def getName():
    return "penghui",200

# 挖矿
@app.route('/mine',methods = ['GET','POST'])
def mine():
   nextProof = blockchain.proof_of_work(blockchain.last_block["proof"])
   
   blockchain.new_transaction(sender="0",recipient=indentifier,amount=1)

   blockchain.new_block(nextProof)
   response = {'code':'1','message':'挖矿成功'}
   return json.dumps(response),200


# 交易
@app.route('/transactions/new',methods = ['GET',"POST"])
def new_transaction():
    values = request.get_json()

    # Check that the required fields are in the POST'ed data
    required = ['sender','recipient','amount']
    if  not all(k in values for k in required):
        return 'Missing values',400

    # Create a new Transaction
    index = blockchain.new_transaction(values['sender'], values['recipient'], values['amount'])      
    response = {'message': f'Transaction will be added to Block {index}'}
    return jsonify(response), 201

    

# 获取整个区块链数据
@app.route('/chain',methods = ['GET',"POST"])
def chain():
   return json.dumps(blockchain.chain),200



@app.route('/')
def index():
    return app.send_static_file('main/html/index.html')  


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)


# 注册节点
@app.route('/nodes/register',methods=['GET','POST'])
def register_nodes():
    values = request.get_json()

    nodes = values.get('nodes')

    if nodes is None:
        return "Error: Please supply a valid list of nodes", 400

    for node in nodes:
        blockchain.register_node(node)    

    response = {
        'message': 'New nodes have been added',
        'total_nodes': list(blockchain.nodes),
    }
    return jsonify(response),201



# 判断将自己的链永远保持有效的链
@app.route('/nodes/resolve', methods=['GET'])
def consensus():
    replaced = blockchain.resolve_conflicts()

    if replaced:
        response = {
            'message': 'Our chain was replaced',
            'new_chain': blockchain.chain
        }
    else:
        response = {
            'message': 'Our chain is authoritative',
            'chain': blockchain.chain
        }

    return jsonify(response), 200   

# 运行socket 服务器
@app.route('/socketServer/run',methods=['GET'])
def run():
    # socketServer.run();
    return "运行成功",200

