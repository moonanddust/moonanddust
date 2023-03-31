import mysql.connector
from flask import Flask, render_template

app = Flask(__name__)

# 连接到MySQL数据库
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="SJTU02319",
  database="page_views"
)

# 获取游标对象
mycursor = mydb.cursor()

@app.route("/moonanddust/test/")
def index():
    # 更新主页的浏览量
    mycursor.execute("UPDATE page_views SET view_count = view_count + 1 WHERE page_name = 'index'")
    mydb.commit()
    return render_template("index.html")

if __name__ == '__main__':
    app.run(port=5502)
