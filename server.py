#!/usr/bin/python3
import blockchain
from uuid import uuid4
from flask import Flask

# isinstance our node
app = Flask(__name__)

# Genesis a globally unique address for this node
node_indentifier = str(uuid4()).replace('-','')

# isinstance this Blockchain
blockchain  = blockchain.Blockchain

@app.route('/mine')
def mine():
   return 'helo swift'



   
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)    

