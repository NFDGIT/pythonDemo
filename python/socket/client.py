#!/usr/bin/python3
# 文件名：client.py

# 导入 socket、sys 模块
import socket
import sys



# while True:
# 创建 socket 对象
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 

# 获取本地主机名
host = socket.gethostname() 
host = "127.0.0.1"

# 设置端口号
port = 6983

while True:
    s.connect((host, port))

    # 接收小于 1024 字节的数据
    senS = input("请输入：")
    print(senS)
    print(s)
    s.send(senS.encode('utf-8'))

    msg = s.recv(1024)
    print (msg.decode('utf-8'))


print('已关闭')
s.close()

