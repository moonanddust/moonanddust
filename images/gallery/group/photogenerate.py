from PIL import Image

# 设置输出图像的大小和间隔
output_width = 6750  # 输出图像宽度为6张照片的宽度总和
output_height = 4500  # 输出图像高度为3张照片的高度总和
margin = 0  # 图片之间的间隔为10像素

# 加载图片列表
image_paths = ["31.jpg","30.jpg","25.jpg","20.jpg","19.jpg","15.jpg","14.jpg","12.jpg","10.jpg","4.jpg","7.jpg","5.jpg","50.jpg","51.jpg","52.jpg","53.jpg","54.jpg","55.jpg"]
images = [Image.open(path) for path in image_paths]

# 缩放图片
for i, img in enumerate(images):
    w, h = img.size
    scale = 1125 / w
    img = img.resize((int(w * scale), int(h * scale)))
    images[i] = img

# 创建输出图像
output = Image.new("RGB", (output_width, output_height), (255, 255, 255))

# 拼接图片
x, y = 0, 0
for i, img in enumerate(images):
    output.paste(img, (x, y))
    x += img.size[0] + margin
    if (i + 1) % 6 == 0:
        x = 0
        y += img.size[1] + margin

# 保存输出图像
output.save("output2.jpg")
