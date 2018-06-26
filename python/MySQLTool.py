#!/usr/bin/python
# -*- coding: UTF-8 -*-

# import MySQLdb
 
# def getList(tableName):
#     # return 'MySQLTool.getList'
#     # 打开数据库连接
#     db = MySQLdb.connect("127.0.0.1","root","Feng666368","peng")

#     # 使用cursor()方法获取操作游标 
#     cursor = db.cursor()

#     # SQL 查询语句
#     sql = "SELECT * FROM " + tableName
#     try:
#         # 执行SQL语句
#         cursor.execute(sql)
#         # 获取所有记录列表
#         results = cursor.fetchall()

#         arr = []
#         for row in results:
#            fname = row[0]
#            lname = row[1]
#            age = row[2]
#            sex = row[3]
#            income = row[4]

#            dict = {'fname':fname,'lname':lname,'age':age,'sex':sex,'income':income}
#            arr.append(dict)


#         # 打印结果
#         return arr

#     except:
#         return None
#         # print "Error: unable to fecth data"

#      # 关闭数据库连接

#     db.close()



# # def insert(parameter_list):
# #     pass