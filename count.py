import os

# 读取当前的访问量
with open('count.txt', 'r') as f:
    count = int(f.read().strip())

# 将访问量加1
count += 1

# 将新的访问量保存到文件中
with open('count.txt', 'w') as f:
    f.write(str(count))

# 返回访问量给客户端
print("Content-type:text/html")
print()
print(f"当前访问量：{count}")
